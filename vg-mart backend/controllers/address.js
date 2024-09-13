const addressModel = require("../models/address");
const userModel = require("../models/user");


//cretae a new address
exports.createAddress = async (req, res) => {
    try {
        const {
            flat_no,
            address_line1,
            address_line2,
            city,
            state,
            pincode,
            user,
        } = req.body;
        if (!address_line1 || !city || !pincode) {
            return res.status(400).json({ message: "Address Line1, City and Pincode is mandatory" });
        }
        const address = await addressModel.create({
            flat_no,
            address_line1,
            address_line2,
            city,
            state,
            pincode,
            user,
        });
        if (address) {
            await userModel.updateOne(
                { _id: user, },
                { $push: { address: address._id } }
            );
            return res.status(201).json({ message: "Address created successfully", address });
        } else {
            return res.status(400).json({ message: "Address not created" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get all addresses
exports.getAllAddresses = async (req, res) => {
    try {
        const addresses = await addressModel.find({}).populate("user",
            "name email mobile");
        if (addresses) {
            return res.status(200).json({ message: "Addresses fetched successfully", addresses });
        } else {
            return res.status(404).json({ message: "No addresses found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get address by addressId
exports.getAddressById = async (req, res) => {
    const addressId = req.params.addressId;
    try {
        const address = await addressModel.findById(addressId).populate("user",
            "name email mobile");
        if (address) {
            return res.status(200).json({ message: "Address fetched successfully", address });
        } else {
            return res.status(404).json({ message: "No address found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get addresses by userId
exports.getAddressesByUserId = async (req, res) => {
    const userId = req.params.userId
    try {
        const addresses = await addressModel.find({ user: userId })
        if (addresses) {
            return res.status(200).json({ message: "Addresses fetched successfully", addresses });
        } else {
            console.log("first")
            return res.status(404).json({ message: "No addresses found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update address by addressId
exports.updateAddressById = async (req, res) => {
    const addressId = req.params.addressId;
    const { address_line1, city, pincode } = req.body
    const address = req.body;
    try {
        if (!address_line1 || !city || !pincode) {
            return res.status(400).json({ message: "Address Line1, City and Pincode can't be empty" });
        }
        const updatedAddress = await addressModel.findByIdAndUpdate(addressId, address, { new: true }).populate
            ("user", "name email mobile");
        if (updatedAddress) {
            return res.status(200).json({ message: "Address updated successfully", updatedAddress });
        } else {
            return res.status(404).json({ message: "No address found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//delete address by addressId
exports.deleteAddressById = async (req, res) => {
    const addressId = req.params.addressId;
    try {
        const existAddress = await addressModel.findById(addressId);
        if (existAddress) {
            await addressModel.findByIdAndDelete(addressId);
            await userModel.updateOne(
                { _id: existAddress.user, },
                { $pull: { address: addressId } }
            );
            return res.status(200).json({ message: "Address deleted successfully" });
        } else {
            return res.status(404).json({ message: "No address found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const express = require("express");
const router = express.Router();
const addressController = require("../controllers/address");

router.post('/create', addressController.createAddress)
router.get('/getAll', addressController.getAllAddresses);
router.get('/get/:addressId', addressController.getAddressById);
router.get('/getAll/:userId', addressController.getAddressesByUserId);
router.patch('/update/:addressId', addressController.updateAddressById);
router.delete('/delete/:addressId', addressController.deleteAddressById);


module.exports = router
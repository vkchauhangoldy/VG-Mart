const categoryModel = require("../models/category")

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const image = req.file ? (`http://localhost:2002/uploads/${req.file.filename}`).replace(/\s+/g, '_') : 'No image uploaded';
    try {
        const category = await categoryModel.create({ name, image });
        res.status(201).json({ category });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        })
    }
}
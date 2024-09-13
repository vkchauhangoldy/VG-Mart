const express = require("express");
const router = express.Router();
const { uploadSingle } = require("../middlewares/upload");
const categoryController = require("../controllers/category");

router.post("/create", uploadSingle("image"), categoryController.createCategory);
module.exports = router;
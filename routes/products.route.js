const express = require("express");
const {
  getProducts,
  getProduct,
  postProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/product.controller");
const router = express.Router();

//read Products
router.get("/", getProducts);
router.get("/:id", getProduct);

//create a products
router.post("/", postProducts);

//update the products
router.put("/:id", updateProducts);

//delete the products
router.delete("/:id", deleteProducts);

module.exports = router;

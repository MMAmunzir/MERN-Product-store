import mongoose from "mongoose";
import Product from "./../models/products.model.js";

export const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.image || !product.price) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all field" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in saving:", error.message);
    res.statusF(500).json({ success: false, message: "server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    console.log("error in fetching", error.message);
    res.status(500).json({ success: false, message: "error in fetching" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const updatedValue = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "updated successfully",
      data: updatedValue,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
};

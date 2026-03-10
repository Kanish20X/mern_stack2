import { getProducts, addProduct } from "../controllers/productController.js";
import express from "express"

const productRouter = express.Router()


productRouter.get("/", getProducts);
productRouter.get("/add", addProduct)

export { productRouter };
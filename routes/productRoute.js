import { getProducts } from "../controllers/productController.js.js";
import express from "express"

const productRouter = express.Router()


productRouter.get("/", getProducts);

export { productRouter };
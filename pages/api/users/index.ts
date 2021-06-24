import type { NextApiRequest, NextApiResponse } from "next";
import { getProduct } from "../../../services/products/products.services";
import { Product } from "../../../types/product.types";

export default (req: NextApiRequest, res: NextApiResponse<Product>) => {
  const { slug } = req.query as any;
  if (!slug) return res.status(400);

  const product = getProduct({ slug });
  if (!product) return res.status(404);

  res.status(200).json(product);
};

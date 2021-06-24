import { Product } from "../../types/product.types";
import { getter } from "../utils";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Le wakuwaku Neko",
    bannerTextA: "ワクワク猫",
    bannerTextB: "ニャャャ!",
    description:
      "Il te réveillera de bon matin avec sa massue pour réclamer ses <span class='bold'>croquettes !</span>",
    price: 25.0,
    type: "tee-shirt",
    slug: "le-chat-mama",
  },
  {
    id: 2,
    name: "",
    bannerTextA: "",
    bannerTextB: "",
    description: "",
    price: 25.0,
    type: "tee-shirt",
    slug: "le-hohoho-oni",
  },
];

export function getProduct(product: Partial<Product>): Product {
  return getter(product, allProducts)[0];
}

export function getAllProducts(): Product[] {
  return allProducts;
}

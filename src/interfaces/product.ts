import { DiscountType } from "../enums/product";

interface Discount {
  minQuantity: number;
  type: DiscountType;
  payQuantity?: number;
  price?: number;
}
export interface Product {
  sku: string;
  name: string;
  price: number;
  discount?: Discount;
}

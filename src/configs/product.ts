import { Product } from "../interfaces/product";
import { DiscountType } from "../enums/product";
export const products: Product[] = [
  {
    sku: "ipd",
    name: "Super iPad",
    price: 549.99,
    discount: {
      minQuantity: 4,
      type: DiscountType.BULK,
      price: 499.99,
    },
  },
  {
    sku: "mbp",
    name: "MacBook Pro",
    price: 1399.99,
  },
  {
    sku: "atv",
    name: "Apple TV",
    price: 109.5,
    discount: {
      minQuantity: 3,
      payQuantity: 2,
      type: DiscountType.MIN_PURCHASE,
    },
  },
  {
    sku: "vga",
    name: "VGA adapter",
    price: 30.0,
  },
];

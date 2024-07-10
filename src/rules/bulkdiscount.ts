import { Product } from "../interfaces/product";
import { PricingRule } from "../interfaces/pricingrule";

export class BulkDiscount implements PricingRule {
  private sku: string;
  private minQuantity: number;
  private discountedPrice: number;

  constructor(sku: string, minQuantity: number, discountedPrice = 0) {
    this.sku = sku;
    this.minQuantity = minQuantity;
    this.discountedPrice = discountedPrice;
  }

  apply(items: Product[]): number {
    const applicableItems = items.filter((item) => item.sku === this.sku);
    if (applicableItems.length > this.minQuantity) {
      return applicableItems.length * this.discountedPrice;
    }
    return applicableItems.reduce((total, item) => total + item.price, 0);
  }
}

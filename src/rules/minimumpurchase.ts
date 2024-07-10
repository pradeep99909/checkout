import { Product } from "../interfaces/product";
import { PricingRule } from "../interfaces/pricingrule";

export class MinPurchaseDiscount implements PricingRule {
  private sku: string;
  private minQuantity: number;
  private payQuantity: number;

  constructor(sku: string, minQuantity: number, payQuantity = 0) {
    this.sku = sku;
    this.minQuantity = minQuantity;
    this.payQuantity = payQuantity;
  }

  apply(items: Product[]): number {
    const applicableItems = items.filter((item) => item.sku === this.sku);
    if (!applicableItems.length) return 0;
    const totalGroups = Math.floor(applicableItems.length / this.minQuantity);
    const remainingItems = applicableItems.length % this.minQuantity;
    return (
      (totalGroups * this.payQuantity + remainingItems) *
      applicableItems[0].price
    );
  }
}

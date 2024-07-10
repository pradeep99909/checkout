import { PricingRule } from "../interfaces/pricingrule";
import { DiscountType } from "../enums/product";
import { MinPurchaseDiscount } from "./minimumpurchase";
import { BulkDiscount } from "./bulkdiscount";
import { Product } from "../interfaces/product";

export class PricingRuleFactory {
  static createPricingRule(productConfig: Product): any {
    if (productConfig.discount) {
      switch (productConfig.discount.type) {
        case DiscountType.MIN_PURCHASE:
          return new MinPurchaseDiscount(
            productConfig.sku,
            productConfig.discount.minQuantity,
            productConfig.discount.payQuantity
          );
        case DiscountType.BULK:
          return new BulkDiscount(
            productConfig.sku,
            productConfig.discount.minQuantity,
            productConfig.discount.price
          );
        default:
          throw new Error(
            `Unknown product discount type: ${productConfig.discount.type}`
          );
      }
    }
  }
}

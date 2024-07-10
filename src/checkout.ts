import { Product } from "./interfaces/product";
import { PricingRule } from "./interfaces/pricingrule";
import { products } from "./configs/product";
import { PricingRuleFactory } from "./rules/pricingrule";

export class Checkout {
  private items: Product[] = [];
  private pricingRules: PricingRule[];

  constructor() {
    this.pricingRules = products.map((productConfig) =>
      PricingRuleFactory.createPricingRule(productConfig)
    );
  }

  scan(itemSku: string): void {
    const item = products.find((product) => product.sku === itemSku);
    if (item) {
      this.items.push(item);
    } else {
      throw new Error(`Item with SKU ${itemSku} not found.`);
    }
  }

  total(): number {
    let total = 0;
    const itemsGrouped = this.groupItemsBySku();
    for (const sku in itemsGrouped) {
      const items = itemsGrouped[sku];
      const pricingRule = this.pricingRules.find(
        (rule) => rule && rule.apply(items) > 0
      );
      if (pricingRule) {
        total += pricingRule.apply(items);
      } else {
        total += items.reduce((sum, item) => sum + item.price, 0);
      }
    }
    return total;
  }

  private groupItemsBySku(): { [sku: string]: Product[] } {
    return this.items.reduce((groups, item) => {
      if (!groups[item.sku]) {
        groups[item.sku] = [];
      }
      groups[item.sku].push(item);
      return groups;
    }, {} as { [sku: string]: Product[] });
  }
}

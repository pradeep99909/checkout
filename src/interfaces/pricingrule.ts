import { Product } from "./product";

export interface PricingRule {
  apply: (items: Product[]) => number;
}

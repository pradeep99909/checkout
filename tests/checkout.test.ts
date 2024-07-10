import { describe, test, expect } from "@jest/globals";
import { Checkout } from "../src/checkout";

describe("Checkout System", () => {
  test("adds all items to scan and total", () => {
    const checkout = new Checkout();
    checkout.scan("atv");
    checkout.scan("vga");
    checkout.scan("ipd");
    checkout.scan("mbp");
    const total = checkout.total();
    expect(total).toBe(109.5 + 30.0 + 549.99 + 1399.99); // Example expected value
  });

  test("applies 3-for-2 deal on Apple TVs", () => {
    const checkout = new Checkout();
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("atv");
    const total = checkout.total();
    expect(total).toBe(109.5 * 2); // 3rd Apple TV free
  });

  test("applies bulk discount on Super iPads", () => {
    const checkout = new Checkout();
    for (let i = 0; i < 5; i++) {
      checkout.scan("ipd");
    }
    const total = checkout.total();
    expect(total).toBe(499.99 * 5); // Bulk discount applied
  });

  test("calculates total price correctly", () => {
    const checkout = new Checkout();
    checkout.scan("atv");
    checkout.scan("atv");
    checkout.scan("vga");
    checkout.scan("ipd");
    checkout.scan("mbp");
    const total = checkout.total();
    expect(total).toBe(109.5 * 2 + 30.0 + 549.99 + 1399.99); // Example expected value
  });
});

import { Checkout } from "./checkout";

const checkout = new Checkout();
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("atv");
checkout.scan("vga");
console.log(checkout.total()); //249

const checkout1 = new Checkout();
checkout1.scan("atv");
checkout1.scan("ipd");
checkout1.scan("ipd");
checkout1.scan("atv");
checkout1.scan("ipd");
checkout1.scan("ipd");
checkout1.scan("ipd");
console.log(checkout1.total()); // 2718.95

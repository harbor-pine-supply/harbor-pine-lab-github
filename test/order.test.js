import { test } from "node:test";
import assert from "node:assert/strict";
import { subtotal, itemCount } from "../src/order.js";
test("subtotal adds line totals in cents", () => assert.equal(subtotal([{ unitCents: 1299, qty: 2 }]), 2598));
test("itemCount adds the quantities", () => assert.equal(itemCount([{ unitCents: 1299, qty: 2 }, { unitCents: 499, qty: 3 }]), 5));

import type { Invoice } from "../types.js";

export const invoices: Invoice[] = [
  {
    id: 1,
    value: "150.00",
    customerId: 1,
    status: "pending",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    value: "89.90",
    customerId: 2,
    status: "paid",
    createdAt: new Date().toISOString(),
  },
];

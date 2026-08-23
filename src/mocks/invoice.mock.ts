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
	{
		id: 3,
		value: "320.50",
		customerId: 2,
		status: "pending",
		createdAt: "2026-08-05T09:15:00.000Z",
	},
];

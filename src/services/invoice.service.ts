import { invoices } from "../mocks/invoice.mock.ts";
import type { Invoice, CreateInvoice } from "../types.ts";

export const InvoiceService = {
  findAll(): Invoice[] {
    return invoices;
  },
  findById(id: number): Invoice | undefined {
    return invoices.find((invoice) => invoice.id === id);
  },
  create(data: CreateInvoice): Invoice {
    const invoice: Invoice = { id: invoices.length + 1, status: "pending", createdAt: new Date().toISOString(), ...data };
    invoices.push(invoice);
    return invoice;
  },
};
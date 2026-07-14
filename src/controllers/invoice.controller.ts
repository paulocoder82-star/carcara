import type { Request, Response } from "express";
import { InvoiceService } from "../services/invoice.service.ts";

export const InvoiceController = {
  index(request: Request, response: Response) {
    const invoices = InvoiceService.findAll();
    response.json(invoices);
  },

  show(request: Request, response: Response) {
    const id = Number(request.params.id);
    const invoice = InvoiceService.findById(id);

    if (!invoice) {
      return response.status(404).json({ message: "Invoice not found" });
    }

    response.json(invoice);
  },

  store(request: Request, response: Response) {
    const invoice = InvoiceService.create(request.body);
    response.status(201).json(invoice);
  },
};
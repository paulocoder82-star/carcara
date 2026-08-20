import { NotFoundError } from "../errors/index.ts";
import { invoices } from "../mocks/invoice.mock.ts";
import type {
	CreateInvoice,
	UpdateInvoice,
} from "../schemas/invoice.schema.ts";
import type { Invoice } from "../types.ts";
import { findCustomerById } from "./customer.service.ts";

export function findAllInvoices(): Invoice[] {
	return invoices;
}

export function findInvoiceById(id: number): Invoice {
	const invoice = invoices.find((invoice) => invoice.id === id);

	if (!invoice) {
		throw new NotFoundError(`Nota fiscal com id ${id} não encontrada.`);
	}

	return invoice;
}

export function insertInvoice({ value, customerId }: CreateInvoice): Invoice {
	findCustomerById(customerId);

	const id = invoices[invoices.length - 1].id;

	const invoice: Invoice = {
		id: id + 1,
		value,
		customerId,
		status: "pending",
		createdAt: new Date().toISOString(),
	};

	invoices.push(invoice);
	return invoice;
}

export function modifyInvoice(id: number, { status }: UpdateInvoice): Invoice {
	const invoice = invoices.find((invoice) => invoice.id === id);

	if (!invoice) {
		throw new NotFoundError(`Nota fiscal com id ${id} não encontrada.`);
	}

	invoice.status = status;

	return invoice;
}

export function removeInvoice(id: number): void {
	const index = invoices.findIndex((invoice) => invoice.id === id);

	if (index === -1) {
		throw new NotFoundError(`Nota fiscal com id ${id} não encontrada.`);
	}

	invoices.splice(index, 1);
}

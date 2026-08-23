export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type Invoice = {
	id: number;
	value: string;
	customerId: number;
	status: "pending" | "paid";
	createdAt: string;
};

export type CreateInvoice = Omit<Invoice, "id" | "status" | "createdAt">;

export type ValidationFieldError = {
	field: string;
	message: string;
};

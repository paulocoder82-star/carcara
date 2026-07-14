export type Customer = {
    id : number;
    name : string;
    email : string;
    status: boolean;
};
export type CreateCustomer = Omit<Customer, "id" | "status">;
export type CustomerWithoutId = Omit<Customer, "id">;
export type UpdateCustomer = Partial<CustomerWithoutId>;

export type Invoice = { 
id : number
value : string;
customerId : number;
status : "pending" | "paid" ;
createdAt : string;
};

export type CreateInvoice = Omit<Invoice, "id" | "status" | "createdAt">;

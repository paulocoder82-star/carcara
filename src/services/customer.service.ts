import { customers } from "../mocks/customer.mock.ts";
import type { Customer, CreateCustomer } from "../types.ts";

export const CustomerService = {
  findAll(): Customer[] {
    return customers;
  },
  findById(id: number): Customer | undefined {
    return customers.find((customer) => customer.id === id);
  },
  create(data: CreateCustomer): Customer {
    const customer: Customer = { id: customers.length + 1, status: true, ...data };
    customers.push(customer);
    return customer;
  },
};
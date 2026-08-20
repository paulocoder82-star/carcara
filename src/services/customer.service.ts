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
  update(id: number, data: Partial<CreateCustomer>): Customer | undefined {
  const customer = customers.find((customer) => customer.id === id);

  if (!customer) {
    return undefined;
  }

  Object.assign(customer, data);
  return customer;
},
  destroy(id: number): Customer | undefined {
  const customer = customers.find((customer) => customer.id === id);

  if (!customer) {
    return undefined;
  }

  customers.splice(customers.indexOf(customer), 1);
  return customer;
},
delete(id: number): Customer | undefined {
  const customer = customers.find((customer) => customer.id === id);

  if (!customer) {
    return undefined;
  }

  customers.splice(customers.indexOf(customer), 1);
  return customer;  
},

};
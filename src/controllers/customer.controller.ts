import type { Request, Response } from "express";
import { CustomerService } from "../services/customer.service.ts";

export const CustomerController = {
  index(request: Request, response: Response) {
    const customers = CustomerService.findAll();
    response.json(customers);
  },

  show(request: Request, response: Response) {
    const id = Number(request.params.id);
    const customer = CustomerService.findById(id);

    if (!customer) {
      return response.status(404).json({ message: "Customer not found" });
    }

    response.json(customer);
  },

  store(request: Request, response: Response) {
    const customer = CustomerService.create(request.body);
    response.status(201).json(customer);
  },
  update(request: Request, response: Response) {
  const id = Number(request.params.id);
  const customer = CustomerService.update(id, request.body);

  if (!customer) {
    return response.status(404).json({ message: "Customer not found" });
  }

  response.json(customer);
},
  destroy(request: Request, response: Response) {
  const id = Number(request.params.id);
  const customer = CustomerService.destroy(id);

  if (!customer) {
    return response.status(404).json({ message: "Customer not found" });
  }

  response.json({ message: "Customer deleted successfully" });
},
delete(request: Request, response: Response) {
  const id = Number(request.params.id);
  const customer = CustomerService.destroy(id);

  if (!customer) {
    return response.status(404).json({ message: "Customer not found" });
  }

  response.json({ message: "Customer deleted successfully" });
}
};
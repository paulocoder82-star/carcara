import type { Request, Response } from "express";
import {
	findAllCustomers,
	findCustomerById,
	insertCustomer,
	modifyCustomer,
	removeCustomer,
} from "../services/customer.service.ts";

export function index(_request: Request, response: Response) {
	const customers = findAllCustomers();
	response.json(customers);
}

export function show(request: Request, response: Response) {
	const id = Number(request.params.id);
	const customer = findCustomerById(id);
	response.json(customer);
}

export function store(request: Request, response: Response) {
	const customer = insertCustomer(request.body);
	response.status(201).json(customer);
}

export function update(request: Request, response: Response) {
	const id = Number(request.params.id);
	const customer = modifyCustomer(id, request.body);
	response.json(customer);
}

export function destroy(request: Request, response: Response) {
	const id = Number(request.params.id);
	removeCustomer(id);
	response.status(204).send();
}

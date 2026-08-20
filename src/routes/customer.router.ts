import { Router } from "express";
import {
	destroy,
	index,
	show,
	store,
	update,
} from "../controllers/customer.controller.ts";
import validate from "../middlewares/validate.ts";
import {
	createCustomerSchema,
	updateCustomerSchema,
} from "../schemas/customer.schema.ts";

const CustomerRouter = Router();

CustomerRouter.get("/", index);
CustomerRouter.get("/:id", show);
CustomerRouter.post("/", validate(createCustomerSchema), store);
CustomerRouter.put("/:id", validate(updateCustomerSchema), update);
CustomerRouter.delete("/:id", destroy);

export default CustomerRouter;

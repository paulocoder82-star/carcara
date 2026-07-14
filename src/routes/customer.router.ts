import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller.ts";

const CustomerRouter = Router();

CustomerRouter.get("/", CustomerController.index);
CustomerRouter.get("/:id", CustomerController.show);
CustomerRouter.post("/", CustomerController.store);

export default CustomerRouter;
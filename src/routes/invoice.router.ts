import { Router} from "express";
import { InvoiceController } from "../controllers/invoice.controller.js";

const InvoiceRouter = Router();

InvoiceRouter.get("/", InvoiceController.index);
InvoiceRouter.get("/:id", InvoiceController.show);
InvoiceRouter.post("/", InvoiceController.store);

export default InvoiceRouter;

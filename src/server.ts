import "dotenv/config";
import express from "express";
import CustomerRouter from "./routes/customer.router.ts";
import InvoiceRouter from "./routes/invoice.router.ts";

const app = express();

app.use(express.json());

app.use("/customers", CustomerRouter);
app.use("/invoices", InvoiceRouter);

app.use((request, response) => {
  response.status(404).json({
    message: "Not found!",
  });
});

app.listen(Number(process.env.PORT), () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
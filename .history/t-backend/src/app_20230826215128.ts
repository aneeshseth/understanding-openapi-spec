// src/app.ts
import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from 'swagger-ui-express'
import { Response as ExResponse, Request as ExRequest } from "express";

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
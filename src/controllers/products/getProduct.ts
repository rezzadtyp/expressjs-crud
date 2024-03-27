import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Data } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const getProduct = (req: Request, res: Response) => {
  const rawData = fs.readFileSync(filePath).toString();
  const { products }: Data = JSON.parse(rawData);

  const id = Number(req.params.id);

  const index = products.find((prod) => prod.id === id);

  if (!index) {
    throw new Error(`product with id ${id} not found`);
  }

  res.status(200).send({
    message: "success",
    data: index,
  });
};

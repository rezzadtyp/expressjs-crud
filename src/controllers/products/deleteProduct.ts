import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Data } from "./types";

const filePath = path.join(__dirname, "../../../db.json");

export const deleteProduct = (req: Request, res: Response) => {
  const rawData = fs.readFileSync(filePath).toString();
  const parsedData: Data = JSON.parse(rawData);

  const id = Number(req.params.id);

  const index = parsedData.products.findIndex((product) => product.id === id);

  try {
    parsedData.products.splice(index, 1);
    fs.writeFileSync(filePath, JSON.stringify(parsedData));

    res.status(200).send({
      message: "update user success",
      data: parsedData,
    });
  } catch (error) {
    throw new Error(`product with id ${id} not found`);
  }
};

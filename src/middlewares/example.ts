import { NextFunction, Request, Response } from "express";

export const MiddlewareExample = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ini middleware example");
  next();
};

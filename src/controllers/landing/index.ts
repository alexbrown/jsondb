import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    res.send("This is the endpoint for the landing page");
}
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    res.send("This is the endpoint to get a object in a collection");
}
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    res.send("This is the endpoint to get a specific object in the container or a collection");
}
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    res.send("This is the endpoint to save/update an object in the container or a collection");
}
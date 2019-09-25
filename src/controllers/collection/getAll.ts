import { Request, Response } from "express";
import db from '../../models/entry';
const Entry = db.getInstance();

export default async (req: Request, res: Response) => {
    const entries = await Entry.find({_container: req.params.container, _collection: req.params.id});
    res.send(entries);
}
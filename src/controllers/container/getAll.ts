import { Request, Response } from "express";
import db from '../../models/entry';
const Entry = db.getInstance();

export default async (req: Request, res: Response) => {
    const entry = await Entry.findOne({_container: req.params.container});
    entry.content = JSON.parse(entry.content);
    res.send(entry);
}
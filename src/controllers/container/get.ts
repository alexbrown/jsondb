import { Request, Response } from "express";
import db from '../../models/entry';
import {getAll} from '../collection';
const Entry = db.getInstance();

export default async (req: Request, res: Response) => {
    const {container, id} = req.params;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const entries = await Entry.find({_container: container, _id: req.params.id});
        res.send(entries);
    } else {
        getAll(req, res);
    }
}
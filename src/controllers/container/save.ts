import { Request, Response } from "express";
import {getParams} from '../../helpers/request';
import db from '../../models/entry';
const Entry = db.getInstance();

export default async (req: Request, res: Response) => {
    const now = new Date();
    const params = getParams(req.params);
    const { body } = req;
    const entry = buildEntry(params, body);
    
    const existingDocument = await Entry.findOne({_container: params._container, _collection: params._collection});
    let record;
    if (existingDocument) {
        entry['_id'] = existingDocument._id; 
        entry['_updatedAt'] = now;
        record = await entry.updateOne(entry);
    } else {
        entry['_createdAt'] = now;
        record = await entry.save();
    }
    res.send(record);
}

function buildEntry(params: any, body: any) {
    return new Entry({
        _container: params._container,
        _collection: params._collection,
        content: JSON.stringify(body)
    })
}
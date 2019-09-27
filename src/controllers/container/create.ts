import uuid from 'uuid/v4';
import db from '../../models/entry';
import { Request, Response } from 'express';
const Entry = db.getInstance();

export default async (req: Request, res: Response) => {
    const now = new Date();
    const entry = new Entry({
        _container: uuid(),
        _apikey: uuid(),
        _createdOn: now
    });
    const record = await entry.save();
    res.send(record);
}
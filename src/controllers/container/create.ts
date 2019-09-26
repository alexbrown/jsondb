import uuid from 'uuid/v4';
import db from '../../models/entry';
const Entry = db.getInstance();

export default async () => {
    const now = new Date();
    const entry = new Entry({
        _container: uuid(),
        _apikey: uuid(),
        _createdOn: now
    });
    const record = await entry.save();
    return record;
}
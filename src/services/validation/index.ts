import db from '../../models/entry';
const Entry = db.getInstance();

export const validateApiKey = async (key: string, container: string) => {
    const entry = await Entry.findOne({_container: container, _apikey: key});
    if (entry) {
        return true;
    } else {
        return false;
    }
}
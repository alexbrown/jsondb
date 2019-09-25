import mongoose from 'mongoose';

export default class {
    public static instance: any = null;

    constructor() {
    }

    static createInstance() {
        const mongoUrl = process.env.MONGO_URL as string;
        mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
        const Schema = mongoose.Schema;
        const entry = new Schema({
            _container: {type: String, index:true, select:false},
            _collection: {type: String, index:true },
            _createdOn: Date,
            _createdBy: {type: String, select: false},
            _updatedOn: Date,
            content: {type: Object}
        });
        return mongoose.model("Entry", entry);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = this.createInstance();
        } 
        return this.instance;
    }

    static save(obj: any) {
        this.instance(obj).save();
    }
}
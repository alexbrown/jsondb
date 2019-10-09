import create from './create';
import Request from '../../test/helpers/request';
import Response from '../../test/helpers/response';
import db from '../../models/entry';

const record = {
    _container: "container",
    _collection: null,
    content: null,
    _createdOn: new Date()
}

jest.mock('../../models/entry', () => ({
    getInstance: () => {
        return class{
            save: Function;
            options: any;
            constructor(options: any) {
                this.options = options;
                this.save = jest.fn().mockResolvedValueOnce(record)
            }
        }
    }
}));

test('should create an new empty container', async () => {
    const req = new Request() as any;
    req.params.container = "test";
    const res = new Response() as any;
    await create(req, res) as any;
    expect(res.message).not.toBeNull();
    expect(res.message._container).toBe('container');
    expect(res.message._collection).toBe(null);
    expect(res.message.content).toBe(null);
});
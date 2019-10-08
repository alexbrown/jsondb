import getAll from './getAll';
import Request from '../../test/helpers/request';
import Response from '../../test/helpers/response';
import db from '../../models/entry';

jest.mock('../../models/entry', () => ({
    getInstance: () => {
        return {
            find: jest.fn()
            .mockResolvedValueOnce([
                {
                    container: 'test',
                    collection: null,
                    content: "{ \"test\": \"Testing\"}"
                },
                {
                    container: 'test',
                    collection: 'users',
                    content: "{ \"name\": \"Chuck\"}"
                }
            ])
            .mockResolvedValueOnce([])
        }
    }
}));

test('should return an array of all the records in a container', async () => {

    const req = new Request() as any;
    req.params.container = "test";
    const res = new Response() as any;
    await getAll(req, res);
    expect(res.message).toHaveLength(2);
    expect(res.message[0].container).toBe('test');
    expect(res.message[0].collection).toBe(null);
    expect(res.message[0].content).toHaveProperty('test');
    expect(res.message[0].content.test).toBe('Testing');
    expect(res.message[1].container).toBe('test');
    expect(res.message[1].collection).toBe('users');
    expect(res.message[1].content).toHaveProperty('name');
    expect(res.message[1].content.name).toBe('Chuck');
});

test('should return an empty array when no records are returned', async () => {
    const req = new Request() as any;
    const res = new Response() as any;
    await getAll(req, res);
    expect(res.message).toHaveLength(0);
});
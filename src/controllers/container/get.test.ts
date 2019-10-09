import Request from '../../test/helpers/request';
import Response from '../../test/helpers/response';
import get from './get';
import db from '../../models/entry';

jest.mock('../../models/entry', () => ({
    getInstance: () => {
        return {
            find: jest.fn().mockResolvedValue([{
                _container: "container",
                _collection: "users",
                content: "{\"name\": \"Chuck\"}"
            }]),
            findOne: jest.fn().mockResolvedValue({
                _container: "container",
                _collection: null,
                content: "{\"hello\": \"world\"}"
            })
        }
    }
}));

test("if an id is passed it should retrieve the record with the correct id", async () => {
    const request = new Request() as any;
    request.params.id = '5d9a7845c720c15aac8f86da';
    request.params.container = 'container';
    const response = new Response() as any;
    await get(request, response);
    expect(response.message).not.toBe(null);
    expect(response.message._container).toBe('container');
    expect(response.message._collection).toBe(null);
    expect(response.message.content.hello).toBe('world');
});

test("if a collection is passed it should retrieve the collection", async () => {
    const request = new Request() as any;
    request.params.id = 'users';
    request.params.container = 'container';
    const response = new Response() as any;
    await get(request, response);
    expect(response.message).not.toBe(null);
    expect(response.message.length).toBe(1);
    expect(response.message[0]._container).toBe('container');
    expect(response.message[0]._collection).toBe('users');
    expect(response.message[0].content.name).toBe('Chuck');
});
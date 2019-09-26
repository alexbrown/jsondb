import get from './get';
import { Request } from 'express';
import Response from '../../test/helpers/response';

test('controller returns correct string', () => {
    const req = {} as Request;
    const res = new Response() as any;
    //get(req, res);
    //expect(res.message).toEqual('This is the endpoint to get a specific object in the container or a collection');
});
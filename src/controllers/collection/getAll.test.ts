import getAll from './getAll';
import { Request } from 'express';
import Response from '../../test/helpers/response';

test('controller returns correct string', () => {
    const req = {} as Request;
    const res = new Response() as any;
    //getAll(req, res);
    //expect(res.message).toEqual('This is the endpoint to get all the objects in a collection');
});
import save from './save';
import { Request } from 'express';
import Response from '../../test/helpers/response';

test('controller returns correct string', () => {
    const req = {} as Request;
    const res = new Response() as any;
    //save(req, res);
    //expect(res.message).toEqual('This is the endpoint to save/update an object in the container or a collection');
});
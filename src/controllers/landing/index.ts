import { Request, Response } from "express";
import {create} from '../container';

export default async (req: Request, res: Response) => {
    const container = await create(); 
    const {_apikey, _container} = container;
    res.render("main", {_apikey, _container});
}
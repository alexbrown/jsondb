import { Request, Response } from "express";
import {create} from '../container';

export default async (req: Request, res: Response) => {
    res.render("main");
}
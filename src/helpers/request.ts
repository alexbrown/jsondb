import { Request } from "express";

export const getParams = (params: any) => {
    const numOfParams = Object.keys(params).length;
    let pathParams;
    if (numOfParams != 0) {
        pathParams = params[0].split('/').filter((p: any) => !!p);
    }
    const _container = pathParams.length > 0 ? pathParams[0] : null;
    const _collection = pathParams.length > 1 ? pathParams[1] : null;
    return {
        _container, 
        _collection
    }
};
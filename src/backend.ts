import {
    Router,
    Request,
    Response,
    RequestHandler as Middleware,
} from 'express';
import { AnyType } from 'types-sn-general';

export type Handler<TBody = AnyType, TParams = unknown, Tquery = unknown> = (
    req: Request<TParams, unknown, TBody, Tquery>,
    res: Response
) => AnyType;

type Method =
    | 'get'
    | 'head'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | 'patch'
    | 'use';

export type Route = {
    method: Method;
    path: string;
    middleware: Middleware[];
    handler: Handler | Router;
};

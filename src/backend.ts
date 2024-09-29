import {
  Router,
  Request,
  Response,
  RequestHandler as Middleware,
} from 'express';
import { AnyType } from 'sn-types-general';

type CustomRequest<
  TBody = AnyType,
  TParams = AnyType,
  Tquery = AnyType
> = Request<TParams, unknown, TBody, Tquery>;

export type Handler< TResult=AnyType,TBody = AnyType, TParams = AnyType, Tquery = AnyType> = (
  req: CustomRequest<TParams, TBody, Tquery>,
  res: Response
) => TResult | Promise<TResult>;

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
  middleware?: Middleware[];
  handler: Handler | Router;
};

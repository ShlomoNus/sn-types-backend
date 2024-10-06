import {
  Router,
  Request,
  Response,
  RequestHandler as Middleware,
} from "express";

import { AnyType } from "sn-types-general";

type ParamDict = Record<string, AnyType>;

interface CustomRequest<
  TBody = unknown,
  TParams extends ParamDict = ParamDict,
  TQuery = unknown
> extends Request<TParams, any, TBody, TQuery> {}

export type Handler<TBody = unknown, TParams = ParamDict, TQuery = unknown> = (
  req: CustomRequest<TBody, TParams, TQuery>,
  res: Response
) => AnyType;

type Method =
  | "get"
  | "head"
  | "post"
  | "put"
  | "delete"
  | "connect"
  | "options"
  | "trace"
  | "patch"
  | "use";

export type Route = {
  method: Method;
  path: string;
  middleware?: Middleware[];
  handler: Handler | Router;
};


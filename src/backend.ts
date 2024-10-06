import {
  Router,
  Request,
  Response,
  RequestHandler as Middleware,
} from "express";

import { AnyType } from "sn-types-general";

type ParamDict = Record<string, AnyType>;

interface CustomRequest<
  TBody = AnyType,
  TParams extends ParamDict = ParamDict,
  TQuery = AnyType
> extends Request<TParams, any, TBody, TQuery> {}

export type Handler<
  TBody = AnyType,
  TParams extends ParamDict = ParamDict, // Add this constraint here
  TQuery = AnyType
> = (
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

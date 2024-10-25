import type { Request, Response, RequestHandler, RequestParamHandler } from 'express';

const req = boostestRequest<Request>();
const res = boostestResponse<Response>();
const handler = boostestHandler<RequestHandler>();
const paramHandler = boostestParamHandler<RequestParamHandler>();

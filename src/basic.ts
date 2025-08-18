export type Success<TPayload = undefined> = {
    status: true;
    payload: TPayload;
    statusCode: number;
};

export type Failed = { status: false; message: string; statusCode: number };

export type Result<TData> = Success<TData> | Failed;

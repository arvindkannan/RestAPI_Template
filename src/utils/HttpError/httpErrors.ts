import { HTTPClientError } from "./HTTPClientError";

export class HTTP400Error extends HTTPClientError {
    readonly statusCode = 400;

    constructor(message: string | object = "Bad Request") {
        super(message);
    }
}

export class HTTP404Error extends HTTPClientError {
    readonly statusCode = 404;

    constructor(message: string | object = "Not found") {
        super(message);
    }
}
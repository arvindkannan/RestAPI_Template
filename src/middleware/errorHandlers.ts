import { Request, Response, NextFunction, Router } from "express";
import { notFoundError, clientError, serverError } from "../utils";

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        notFoundError();
    });
};

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        clientError(err, res, next);
    });
};

const handleServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        serverError(err, res, next);
    });
};

export { handle404Error, handleClientError, handleServerError };
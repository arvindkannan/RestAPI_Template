import express from 'express';
import { Request, Response } from "express";
import { getSampleData } from "./sample.controller";

//const sampleModule = express.Router();

//////////////////////

/**
 * Gets a content based on backend data for sample
 * -Parameters
 *      id: sample id
 * -Body (json)
 * {
 *       add comments for body if any to api request 
 *
 * }
 */
//sampleModule.get("/samplemodule/:id", getSampleData);
//export { sampleModule };

export default [
    {
        path: "/api/samplemodule/:id",
        method: "get",
        handler: async (req: Request, res: Response) => {
            getSampleData(req, res);
        }
    }
];

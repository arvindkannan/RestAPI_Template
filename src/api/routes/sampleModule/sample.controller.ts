/*
import fs from "fs";
import path from "path");
import moment from "moment-timezone";
import Readable from "stream";
*/
import { Request, Response } from "express";

const toTitleCase = (str: String) => {
  //incase of Title case needed
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Sample Data for Rest API
 * @param req
 * @param res
 */

let getSampleData = async (_req: Request, _res: Response) => {
  try {
    let Result: Object;
    //Backend Logic anything goes here

    Result = {
      samepleField1: "SampleData1",
      samepleField2: "SampleData2",
      SampleArrayField1: [
        {
          Data1a: "data1",
          Data1b: "data2"
        },
        {
          Data2a: "data1",
          Data2b: "data2"
        }
      ]
    };

    return _res.json(Result); //returns reponse json if any...
  } catch (error) {
    throw (error);
  }
};

export { getSampleData };
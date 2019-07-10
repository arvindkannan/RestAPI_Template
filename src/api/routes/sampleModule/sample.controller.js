"use strict";
/*var fs = require("fs");
var path = require("path");
var moment = require("moment-timezone");
var Readable = require("stream").Readable;*/

function toTitleCase(str) {
  //incase of Title case needed
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

exports.getSampleData = async (req, res, next) => {
  try {
    let Result;
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

    return res.json(Result); //returns reponse json if any...
  } catch (error) {
    next(error);
  }
};

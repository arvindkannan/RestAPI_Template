// Type definitions for Middleware
// TypeScript Version: 3.5.3

/* =================== USAGE ===================

    import * as middleware from "./middleware";
    var app = express();

 =============================================== */

import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";

export default [handleCors, handleBodyRequestParsing, handleCompression];
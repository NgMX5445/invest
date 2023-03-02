const express = require("express");

// const createError = require(`http-errors`);

// const {
//     EMPTY_RESULT_ERROR,
//     DUPLICATE_ENTRY_ERROR,
//     TABLE_ALREADY_EXISTS_ERROR,
// } = require("./errors");

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.static("public"));
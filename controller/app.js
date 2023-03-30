const express = require("express");
const User = require("../model/user");
// const createError = require(`http-errors`);

// const {
//     EMPTY_RESULT_ERROR,
//     DUPLICATE_ENTRY_ERROR,
//     TABLE_ALREADY_EXISTS_ERROR,
// } = require("./errors");

const app = express();
app.use(express.json()) 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use(express.static("public"));

app.get(`/user`, function (req, res) {
console.log("Test 1")
res.send("test1")
})


// POST USER
app.post(`/user`, function (req, res) {
  


    let data={

        "username":req.body.username,
        "email": req.body.email,
        "name": req.body.name,
        "password": req.body.password,
        "type": req.body.type,
        "contact": req.body.contact

    };
   
    User.insert(data, function (error, result) {
        let dataJson = {
            'status': -1,
            'message': "",
            'insertId': -1
        };
        if (error) {
            dataJson.status = 0;
            dataJson.message = "Something got problem";

            if (error.code == 'ER_DUP_ENTRY') {
                dataJson.status = error.status
                dataJson.message = error.sqlMessage;
                res.status(422).type("json").send(dataJson);

            }

            else if (error.code == 'WARN_DATA_TRUNCATED') {

                dataJson.message = "Please key in accordingly (" + error.sqlMessage + ")";
            }
            res.status(500).type("json").send(dataJson);
        }

        else {


            if (result.affectedRows == 1) {
                dataJson.status = result.statusCode;
                dataJson.message = "user added";
                dataJson.insertId = result.insertId;
                res.status(200).type("json").send(`"userid" :  ${result.insertId}`)

            } else {
                dataJson.status = result.statusCode;
                dataJson.message = " unable user ";
                dataJson.insertId = result.insertId;
                res.status(404).type("json").send("Unable to add user")
            }
        }
    });
    return res.send("xxxx!!")
      

 
  });
  module.exports = app;
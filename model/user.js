//-----------------------------------------
// imports
//-----------------------------------------
let db = require("../controller/databaseConfig");

module.exports = {
    insertUser: function (user) {
        console.log(user);
        // get a connection to the database
        var dbConn = db.getConnection();
        // tap the access card at the door
        dbConn.connect(function (err) {

            if (err) {//database connection gt issue!

                console.log(err);
                return err;
            } else {
                console.log("Connected");

                let sql = `
                INSERT INTO
	                users (username, email ,contact , password ,type , name)
                VALUES
                    (?, ?, ?, ?,?,?)`;

                dbConn.query(sql,
                    [user.username, user.email, user.contact, user.password, user.type, user.name],
                    function (error, q_result) {
                        dbConn.end();
                        if (error) {
                            console.error(error);// print out the error
                            return error;

                        }
                        console.log(q_result);

                        if (q_result.length == 0) {
                            //no user found
                            return  null;
                        } else {
                            //user found
                            return  q_result;

                        }
                    });
            }
        });
    }
}
//-----------------------------------------
// imports
//-----------------------------------------
let db = require("../controller/databaseConfig");

module.exports = {
    insert: function (user) {
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
	                users (username, email ,contact , password ,type , profile_pic_url)
                VALUES
                    (?, ?, ?, ?,?,?)`;

                dbConn.query(sql,
                    [user.d_username, user.d_email, user.d_contact, user.d_password, user.d_type, user.d_profile_pic_url],
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
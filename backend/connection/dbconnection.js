const mysql = require('mysql');

const config ={
    host: "localhost",
        user: "root",
        password: "",
        port: 3306,
        database: "nodejs-exercise"
};

const db = mysql.createPool(config);

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err,sql) => {
            if(err){
                reject(err);
                console.log("db error: ", err);
            }else{
                sql.query(query,(err, results) =>{
                    if(err){
                        reject(err);
                        console.log("query error: ", err);
                    }else{
                        resolve(results)
                    }
                    sql.release()
                })
            }
        })
    })
}
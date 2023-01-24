import sequelize from "sequelize";

const db = new sequelize('db_userlogin', 'fakih-ibrohim', 'ibrohim200397',{
    host : "localhost",
    dialect : "mysql"
})

export default db;
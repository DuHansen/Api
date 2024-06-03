const Sequelize = require('sequelize');

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.db = new Sequelize(
            process.env.MYSQL_DATABASE,
            process.env.MYSQL_USER,
            process.env.MYSQL_PASSWORD,
            { 
                host: process.env.DB_HOST, 
                dialect: 'mysql' 
            }
        )
    }
}

module.exports = new Database();

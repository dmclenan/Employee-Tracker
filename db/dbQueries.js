const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }
findAllEmployees() {
    return this.connection.query(
        'SELECT * FROM employees'
    );
}
// create a new employee 



}

module.exports = new DB(connection);
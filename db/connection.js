const mysql = require('mysql2');

// Connect to database

const db = mysql.createConnection (
    {

    host: 'localhost',
    //Your MySQL username
    user: 'root',
    //Your MySQL Password
    password: 'password',
    
    database: 'employee_db'

    },
    console.log('Connected to the election database')
);

module.exports = db;
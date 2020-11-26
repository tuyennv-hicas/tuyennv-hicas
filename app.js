const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'reactUser',
    password: '1234567',
    database: 'reactmysql'
});

connection.connect(function (err) {
    (err) ? console.log(err) : console.log(connection);
});

app.get('/api/accout', (req, res) => {
    var sql = "SELECT * FROM accout";
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.json({ news: results });
    });
});

app.listen(4000, () => console.log('App listening on port 4000'));
const express = require('express');
const mysql = require('mysql');

const app = express();
const port =  3001;

// Create connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'enter_note'
})

db.connect((erreur) => {
    if (erreur) throw erreur;
    console.log("Connect to database !");
})

app.use(express.static('Projet_Perso_1'));

app.get('/addStudent', (request, response) => {
    const studentName = request.query.studentName;
    const sql = `INSERT INTO students (name) VALUES ('${studentName}')`;
    db.query(sql,  (erreur, result) => {
        if (erreur) throw erreur;
        receive.send('Note added !')
    });
});

app.listen(port, () => {
    console.log(`Serveur started on port ${port}`);
})
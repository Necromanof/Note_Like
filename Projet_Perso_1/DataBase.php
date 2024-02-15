<?php

    define('HOST', 'localhost');
    define('DB_NAME', 'enter_note');
    define('USER', 'root')
    define('PASS', '');

    try{
        $db = new PDO('mysql:host=' .HOST . "dbname" . DB_NAME, USER, PASS);
        $db-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXEPTION);
        echo "Connecté !"
    } catch (PDOExeption $e){
        echo $e;
    }
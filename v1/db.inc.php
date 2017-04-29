<?php
//db.inc.php

$dbname = "contacts";
$dbuser = "";
$dbpass = "";
$dbhost = "edumedia";

try{
    $pdo = new PDO("mysql:host=" . $dbhost . ";dbname=" . $dbname, $dbuser, $dbpass);
}catch(PDOException $err){
    header('HTTP/1.1: 500');
    echo "Database connection problem" . $err->getMessage();
    exit();
}
?>

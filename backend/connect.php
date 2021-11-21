<?php
error_reporting(E_ALL);

ini_set("display_errors", 1);

@ob_start();

@session_start();

date_default_timezone_set('Europe/Istanbul');

$host='localhost';

$db='test';

$user='root';

$pass='';

try {

    $db=new PDO("mysql:host=$host;dbname=$db;charset=utf8",$user,$pass);

   # echo "Test Başarıl";

} catch (PDOException $e) {

    echo $e->getMessage();

}

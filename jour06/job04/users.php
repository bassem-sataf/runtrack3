<?php

$dtb = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbtable = 'utilisateurs';

$bdd = mysqli_connect($dtb, $dbuser, $dbpass, $dbtable);

$request = mysqli_query( $bdd, 'SELECT * FROM `utilisateurs`');

$users = mysqli_fetch_all($request);

$json = json_encode($users);
echo $json;
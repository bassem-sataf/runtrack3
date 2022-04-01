<?php

$dtb = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbtable = 'utilisateurs';

$bdd = mysqli_connect($dtb, $dbuser, $dbpass, $dbtable);
if(!empty($_POST['email']))
{
    $request = mysqli_query( $bdd, "SELECT `email` FROM `utilisateurs` WHERE `email` = '$_POST[email]'"); 
    if(mysqli_num_rows($request)>0)
    {
        echo ('already_used');
    }
    else
    {
        echo ('free_to_use');
    }
}
else {
    echo 'vide';

}
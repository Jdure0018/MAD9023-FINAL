<?php
//insert.php
//This page handles the inserting into the database of the new contact

require_once('db.inc.php');

$contact_first = $_POST['contact_first'];
$contact_last  = $_POST['contact_last'];
$contact_email = $_POST['contact_email'];
       
$stmt = $pdo->prepare("INSERT INTO mad9023_contacts(contact_first,contact_last,contact_email) VALUES(:contact_first,:contact_last,:contact_email)");
$stmt->execute(array(':contact_first'=>$contact_first,':contact_last'=>$contact_last,':contact_email'=>$contact_email));
header('Location:index.php');

?>
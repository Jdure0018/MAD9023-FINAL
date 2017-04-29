<?php
//select.php
//This page handles the retrieval and sorting of lists of contacts

require_once('db.inc.php');


//use one of these based on the parameters
//header("Content-Type: application/json");
//header("Content-Type: text/xml");

$result = $pdo->query('SELECT * FROM mad9023_contacts');
$rows = $result->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode(['contacts' => $rows]);

?>
<?php
//delete.php
//This page handles the deleting of an existing contact

require_once('db.inc.php');



    $id = $_GET['id'];

        $stmt = $pdo->prepare("DELETE FROM mad9023_contacts WHERE contact_id=?");
        $stmt->execute(array($id));
        header('Location:index.php');


?>
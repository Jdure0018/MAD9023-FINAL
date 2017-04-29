<?php
//update.php
//This page handles the updating of an existing contact

require_once('db.inc.php');

if(isset($_POST['btnSubmit'])){
    $id = $_POST['contact_id'];
    $contact_first = $_POST['contact_first'];
    $contact_last =  $_POST['contact_last'];
    $contact_email = $_POST['contact_email'];
    if(!empty($contact_first)){
        try{
            $stmt = $pdo->prepare("UPDATE mad9023_contacts SET contact_first = :contact_first, contact_last = :contact_last, contact_email = :contact_email WHERE contact_id = :id");
            $stmt->execute(array(':contact_first'=>$contact_first, ':contact_last'=>$contact_last,':contact_email'=>$contact_email, ':id'=>$id));
            if($stmt){
                header('Location:index.php');
            }
        }catch(PDOException $ex){
            echo $ex->getMessage();
        }
    }else{
        echo "INPUT NAME";
    }
}

?>
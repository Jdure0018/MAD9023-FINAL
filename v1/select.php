<?php
//select.php
//This page handles the retrieval and sorting of lists of contacts

require_once('db.inc.php');

    try
    {
        $pdo = new PDO("mysql:host=" . $dbhost . ";dbname=" . $dbname, $dbuser, $dbpass);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e)
    {
        die($e->getMessage());
    }


    try
    {
        if (isset($_GET['contact_last']))
            $result = $pdo->prepare("SELECT * FROM mad9023_contacts ORDER BY contact_last ASC");
        else
            $result = $pdo->prepare("SELECT * FROM mad9023_contacts ORDER BY contact_last DESC");

        $result->execute();

        if($result->rowCount())
        {
            while($r = $result->fetchAll())
            {
                echo 'Last Name:' . $r->contact_last. '<br/>';
            }
        }
        else echo 'no record found!';

    }
    catch (PDOException $e)
    {
        die($e->getMessage());
    }

?>
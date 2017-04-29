<?php
//index.php
//This would be the main routing page of the API
require_once('db.inc.php');

require "libs/Facebook/autoload.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contacts</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <h2>Contact Form</h2>
   <form method="post" name="webForm" action="insert.php" id="webForm">
    
   <label for="id">Contact ID:</label><input type="text" name="contact_id" id="contact_id" hidden /><br/>
   <label for="firstName">First Name:</label><input type="text" name="contact_first" id="contact_first"  /><br/>
   <label for="last">Last Name:</label><input type="text" name="contact_last" id="contact_last"  /><br/>
   <label for="email">Email:</label><input type="text" name="contact_email" id="contact_email"/>
    <br/>
    <button type="submit" id="btnSubmit" name="btnSubmit">Add Contact</button>
    </form>
   <br/><br/><br/>
   
   <h2>Contact Table</h2>
    <div class="container" >
        <h3>Contacts List</h3>
        <div class="row">
            <div class="col-md-9" id="content">
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
</body>
</html>
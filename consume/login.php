<?php
session_start();
require "libs/Facebook/autoload.php";
$fb = new Facebook\Facebook([
  'app_id' => '1484149848303011', // Replace {app-id} with your app id
  'app_secret' => 'a31d0bc00ece9f4e1d3633b7f094609f',
  'default_graph_version' => 'v2.2',
  ]);

$helper = $fb->getRedirectLoginHelper();

$permissions = ['email']; // Optional permissions
$loginUrl = $helper->getLoginUrl('http://localhost/api/consume/fb-callback.php', $permissions);

echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';
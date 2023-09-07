<?php

require '../config.php';
require './jwt.php';

$token = null;
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearer = "Bearer ";
    $token = substr($headers['Authorization'], strlen($bearer));
}

if (isset($token) && !empty($token)) {
    $secret = $_CONFIG["JWT"];
    $user = JWT::decode($token, $secret);
    $_USUARIO =  json_encode($user);
} else {
    $_USUARIO = null;
}
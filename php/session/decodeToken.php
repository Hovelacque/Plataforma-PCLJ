<?php

require(__DIR__ . '/../config.php');
require(__DIR__ . '/jwt.php');

$token = null;
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearer = "Bearer ";
    $token = substr($headers['Authorization'], strlen($bearer));
}

if (isset($token) && !empty($token)) {
    $secret = $_CONFIG["JWT"];
    $_USUARIO = JWT::decode($token, $secret);
} else {
    $_USUARIO = null;
}

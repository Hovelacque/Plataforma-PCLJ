<?php

require '../config.php';
require './jwt.php';

$secret = $_CONFIG["JWT"];
$payload = [
    "sub" => "1234567890",
    "name" => "Rodrigo",
    "role" => "admin"
];
echo JWT::encode($payload, $secret);

<?php

//Configura o CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, X-Token-Auth, Authorization");

// $configFile = __DIR__ . '/config.json';
// $configFile = __DIR__ . '/config.desk.json';
$configFile = __DIR__ . '/config.prod.json';

$jsonString = file_get_contents($configFile);
$_CONFIG = json_decode($jsonString, JSON_PRETTY_PRINT);
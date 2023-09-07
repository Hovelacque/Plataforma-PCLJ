<?php

// $configFile = __DIR__ . '\config.json';
$configFile = __DIR__ . '\config.desk.json';

$jsonString = file_get_contents($configFile);
$_CONFIG = json_decode($jsonString, JSON_PRETTY_PRINT);
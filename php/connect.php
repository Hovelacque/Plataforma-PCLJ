<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'pclj');

function connect()
{
  $connect = new mysqli(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }

  return $connect;
}

$conn = connect();
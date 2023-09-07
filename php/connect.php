<?php

require 'config.php';

define('DB_HOST', $_CONFIG["DB"]["DB_HOST"]);
define('DB_USER', $_CONFIG["DB"]["DB_USER"]);
define('DB_PASS', $_CONFIG["DB"]["DB_PASS"]);
define('DB_NAME', $_CONFIG["DB"]["DB_NAME"]);

function connect()
{
  $connect = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

  if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
  }

  return $connect;
}

$conn = connect();

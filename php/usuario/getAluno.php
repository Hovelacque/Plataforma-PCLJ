<?php

require (__DIR__ . '/../connect.php');

$id = $_GET['id'];
if (isset($id) && !empty($id) && trim($id) != '') {

  // Sanitize.
  $id = mysqli_real_escape_string($conn, trim($id));

  // Get by id.
  $sql = "SELECT id, nome FROM `usuarios` WHERE `id` ='{$id}' LIMIT 1";

  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);

  echo json_encode($row, JSON_NUMERIC_CHECK);
  exit();
}

echo json_encode(array(
  "error" => true,
  "message" => "Id não informado!"
));
die();

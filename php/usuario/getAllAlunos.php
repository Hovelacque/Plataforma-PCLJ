<?php

require (__DIR__ . '/../connect.php');

$sql = "SELECT id, nome FROM `usuarios` WHERE `ativo` = 1 AND `tipo` = 3";
$result = $conn->query($sql);

$dtos = [];

while ($row = $result->fetch_assoc()) {
  $dtos[] = array(
    "id" => $row['id'],
    "nome" => $row['nome']
  );
}

echo json_encode($dtos, JSON_NUMERIC_CHECK);

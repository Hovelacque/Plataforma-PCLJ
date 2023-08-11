<?php

require '../connect.php';

$sql = "SELECT * FROM `usuarios`";
$result = $conn->query($sql);

$dtos = [];

while ($row = $result->fetch_assoc()) {
  $dtos[] = array(
    "id" => $row['id'],
    "nome" => $row['nome'],
    "tipo" => $row['tipo']
  );
}

echo json_encode($dtos, JSON_NUMERIC_CHECK);

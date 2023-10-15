<?php

require(__DIR__ . '/../connect.php');

$sql = "SELECT * FROM `trabalhos`";
$result = $conn->query($sql);

$dtos = [];

while ($row = $result->fetch_assoc()) {
  $dtos[] = array(
    "id" => $row['id'],
    "nome" => $row['nome'],
    "cor"=> $row['cor']
  );
}

echo json_encode($dtos, JSON_NUMERIC_CHECK);

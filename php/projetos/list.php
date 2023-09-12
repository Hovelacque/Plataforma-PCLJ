<?php

require(__DIR__ . '/../connect.php');
require(__DIR__ . '/../session/decodeToken.php');

// if (!$_USUARIO) {
//   http_response_code(500);
//   echo json_encode(array(
//     "error" => true,
//     "message" => "Usuário não encontrado!"
//   ));
//   die();
// }

$usuarioId = $_USUARIO["id"];
$sql = "SELECT * FROM `projetos` WHERE `usuarioId` = {$usuarioId}";
$result = $conn->query($sql);

$dtos = [];

while ($row = $result->fetch_assoc()) {
  $dtos[] = array(
    "id" => $row['id'],
    "nome" => $row['nome'],
    "descricao" => $row['descricao']
  );
}

echo json_encode($dtos, JSON_NUMERIC_CHECK);

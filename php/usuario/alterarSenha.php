<?php

require(__DIR__ . '/../connect.php');
require(__DIR__ . '/../session/decodeToken.php');

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);

  if ($_USUARIO == null) {
    http_response_code(500);
    echo json_encode(array(
      "message" => "Usuário não encontrado!"
    ));
    die();
  }

  $userId = $_USUARIO["id"];
  $sql = "SELECT * FROM `usuarios` WHERE `id` = '{$userId}' LIMIT 1";;
  $result = mysqli_query($conn, $sql);

  $row = mysqli_fetch_assoc($result);
  if ($row["senha"] != $request->senhaAtual) {
    http_response_code(500);
    echo json_encode(array(
      "message" => "Senha atual incorreta!"
    ));
    die();
  }

  $novaSenha = mysqli_real_escape_string($conn, $request->novaSenha);

  // Store.
  $sql = " UPDATE `usuarios` SET `senha` = '{$novaSenha}'WHERE `id` = {$userId}";

  if (mysqli_query($conn, $sql)) {
    http_response_code(204);
  } else {
    return http_response_code(422);
  }
}

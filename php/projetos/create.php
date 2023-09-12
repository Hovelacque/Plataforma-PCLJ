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

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->nome) === '' || trim($request->descricao) === '' || $_USUARIO == null) {
    http_response_code(400);
    echo json_encode(array(
      "error" => true,
      "message" => "Erro interno no cadastro"
    ));
    die();
  }

  // Sanitize.
  $nome = mysqli_real_escape_string($conn, trim($request->nome));
  $descricao = mysqli_real_escape_string($conn, $request->descricao);
  $usuarioId = $_USUARIO["id"];

  // Store.
  $sql = " INSERT INTO `projetos` (`nome`,`descricao`, `usuarioId`) VALUES ('{$nome}','{$descricao}','{$usuarioId}')";

  if (mysqli_query($conn, $sql)) {
    http_response_code(201);
    $request->id = mysqli_insert_id($conn);
    echo json_encode($request);
  } else {
    http_response_code(422);
  }
}

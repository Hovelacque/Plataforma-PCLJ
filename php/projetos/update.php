<?php

require(__DIR__ . '/../connect.php');
require(__DIR__ . '/../session/decodeToken.php');

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

  // Store.
    $sql = " UPDATE `projetos` SET
    `nome` = '{$nome}',
    `descricao` = '{$descricao}'
          WHERE `id` = {$request->id} 
    ";

  if (mysqli_query($conn, $sql)) {
    http_response_code(204);
  } else {
    return http_response_code(422);
  }
}

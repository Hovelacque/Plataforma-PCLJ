<?php

require '../connect.php';

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->nome) === '' || (int)$request->senha === '' || (int)$request->tipo  <= 0) {
    return http_response_code(400);
  }

  // Sanitize.
  $nome = mysqli_real_escape_string($conn, trim($request->nome));
  $senha = mysqli_real_escape_string($conn, $request->senha);
  $tipo = mysqli_real_escape_string($conn, (int)$request->tipo);
  
  $olho = mysqli_real_escape_string($conn, $request->olho);
  $roupa = mysqli_real_escape_string($conn, $request->roupa);

  // Store.
  $sql = " INSERT INTO `usuarios` (`nome`, `senha`, `tipo`, `olho`, `roupa`) 
  VALUES ('{$nome}','{$senha}','{$tipo}','{$olho}','{$roupa}')";

  if (mysqli_query($conn, $sql)) {
    http_response_code(201);
    $request->id = mysqli_insert_id($conn);
    echo json_encode($request);
  } else {
    http_response_code(422);
  }
}

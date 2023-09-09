<?php

require(__DIR__ . '/../connect.php');

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if (trim($request->nome) === '' || trim($request->usuario) === '' || (int)$request->senha === '' || (int)$request->tipo  <= 0) {
    return http_response_code(400);
  }

  $usuario = mysqli_real_escape_string($conn, trim($request->usuario));
  $usuario_repetido = mysqli_query($conn, "SELECT * FROM `usuarios` WHERE `usuario` ='{$usuario}'");
  if ($usuario_repetido->num_rows > 0) {
    http_response_code(500);
    echo json_encode(array(
      "error" => true,
      "message" => "Já existe um usuário " . $usuario . " no sistema!"
    ));
    die();
  }


  // Sanitize.
  $nome = mysqli_real_escape_string($conn, trim($request->nome));
  $senha = mysqli_real_escape_string($conn, $request->senha);
  $tipo = mysqli_real_escape_string($conn, (int)$request->tipo);
  // AVATAR
  $olho = mysqli_real_escape_string($conn, $request->olho);
  $sobrancelha = mysqli_real_escape_string($conn, $request->sobrancelha);
  $boca = mysqli_real_escape_string($conn, $request->boca);
  $pele = mysqli_real_escape_string($conn, $request->pele);
  $chapeu_cabelo = mysqli_real_escape_string($conn, $request->chapeu_cabelo);
  $acessorio = mysqli_real_escape_string($conn, $request->acessorio);
  $cor_cabelo = mysqli_real_escape_string($conn, $request->cor_cabelo);
  $cor_chapeu = mysqli_real_escape_string($conn, $request->cor_chapeu);
  $barba = mysqli_real_escape_string($conn, $request->barba);
  $cor_barba = mysqli_real_escape_string($conn, $request->cor_barba);
  $roupa = mysqli_real_escape_string($conn, $request->roupa);
  $cor_roupa = mysqli_real_escape_string($conn, $request->cor_roupa);
  $estampa = mysqli_real_escape_string($conn, $request->estampa);

  // Store.
  $sql = " INSERT INTO `usuarios` (`nome`,`usuario`, `senha`, `tipo`, 
  -- AVATAR
  `olho`, `sobrancelha`, `boca`, `pele`, `chapeu_cabelo`, `acessorio`, `cor_cabelo`, `cor_chapeu`, `barba`, `cor_barba`, `roupa`, `cor_roupa`, `estampa`) 
  VALUES ('{$nome}','{$usuario}','{$senha}','{$tipo}',
  '{$olho}', '{$sobrancelha}', '{$boca}', '{$pele}', '{$chapeu_cabelo}', '{$acessorio}', '{$cor_cabelo}', '{$cor_chapeu}', '{$barba}', '{$cor_barba}', '{$roupa}', '{$cor_roupa}', '{$estampa}')";

  if (mysqli_query($conn, $sql)) {
    http_response_code(201);
    $request->id = mysqli_insert_id($conn);
    echo json_encode($request);
  } else {
    http_response_code(422);
  }
}

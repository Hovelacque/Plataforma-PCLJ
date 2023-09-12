<?php

require(__DIR__ . '/../connect.php');

function uploadFoto($image, $id)
{
  $image_parts = explode(";base64,", $image);
  $image_base64 = base64_decode($image_parts[1]);
  $file = "../uploads/avatares/" . $id . '.png';
  file_put_contents($file, $image_base64);
}

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->nome) === '' || trim($request->usuario) === '' || (int)$request->tipo  <= 0) {
    return http_response_code(400);
  }

  $usuario = mysqli_real_escape_string($conn, trim($request->usuario));
  $usuario_repetido = mysqli_query($conn, "SELECT * FROM `usuarios` WHERE `usuario` ='{$usuario}' and `id` <> '{$request->id}' ");
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
  $tipo = mysqli_real_escape_string($conn, (int)$request->tipo);
  $senha = mysqli_real_escape_string($conn, $request->senha);
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
    $sql = " UPDATE `usuarios` SET
    `nome` = '{$nome}',
    `usuario` = '{$usuario}',
    `senha` = '{$senha}',
    `tipo` = '{$tipo}', 
    `olho` = '{$olho}',
    `sobrancelha` = '{$sobrancelha}',
    `boca` = '{$boca}',
    `pele` = '{$pele}',
    `chapeu_cabelo` = '{$chapeu_cabelo}',
    `acessorio` = '{$acessorio}',
    `cor_cabelo` = '{$cor_cabelo}',
    `cor_chapeu` = '{$cor_chapeu}',
    `barba` = '{$barba}',
    `cor_barba` = '{$cor_barba}',
    `roupa` = '{$roupa}',
    `cor_roupa` = '{$cor_roupa}',
    `estampa` = '{$estampa}' 
          WHERE `id` = {$request->id} 
    ";


  if (mysqli_query($conn, $sql)) {
    http_response_code(204);
    uploadFoto($request->image, $request->id);
  } else {
    return http_response_code(422);
  }
}

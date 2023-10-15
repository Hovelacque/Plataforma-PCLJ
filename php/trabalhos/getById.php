<?php

require(__DIR__ . '/../connect.php');

function recuperaAlunos($conn, $trabalhoId)
{
  $sql = "SELECT u.id, u.nome, t.pastaDeArquivos FROM `trabalho_aluno` as t 
          INNER JOIN `usuarios` as u 
          ON u.id = t.usuarioId 
          WHERE `trabalhoId` ='{$trabalhoId}';";
  $result = $conn->query($sql);

  $alunos = [];
  while ($row = $result->fetch_assoc()) {
    $alunos[] = array(
      "id" => $row['id'],
      "nome" => $row['nome'],
      "pastaDeArquivos" => $row['pastaDeArquivos']
    );
  }
  return $alunos;
}

$id = $_GET['id'];
if (isset($id) && !empty($id) && trim($id) != '') {

  // Sanitize.
  $id = mysqli_real_escape_string($conn, trim($id));

  // Get by id.
  $sql = "SELECT * FROM `trabalhos` WHERE `id` ='{$id}' LIMIT 1";

  $result = mysqli_query($conn, $sql);
  $row = mysqli_fetch_assoc($result);
  
  $dtos = array(
    "id" => $row['id'],
    "nome" => $row['nome'],
    "descricao" => $row['descricao'],
    "cor" => $row['cor'],
    "alunos" => recuperaAlunos($conn, $row['id'])
  );

  echo json_encode($dtos, JSON_NUMERIC_CHECK);
  exit();
}

echo json_encode(array(
  "error" => true,
  "message" => "Id não informado!"
));
die();

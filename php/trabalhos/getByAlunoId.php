<?php

require(__DIR__ . '/../connect.php');

$id = $_GET['id'];
if (isset($id) && !empty($id) && trim($id) != '') {

  // Sanitize.
  $id = mysqli_real_escape_string($conn, trim($id));

  $sql = "SELECT DISTINCT t.pastaDeArquivos FROM `trabalho_aluno` as ta
          INNER JOIN `trabalhos` as t
          ON t.id = ta.trabalhoId 
          WHERE `usuarioId` ='{$id}';";
  $result = $conn->query($sql);

  $trabalhos = [];
  while ($row = $result->fetch_assoc()) {
    $trabalhos[] = iconv('ISO-8859-1','UTF-8',$row['pastaDeArquivos']);
  }

  echo json_encode($trabalhos, JSON_NUMERIC_CHECK);
  exit();
}

echo json_encode(array(
  "error" => true,
  "message" => "Id não informado!"
));
die();

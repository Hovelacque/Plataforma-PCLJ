<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pclj";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// // Get the posted data.
// $postdata = file_get_contents("php://input");

// if(isset($postdata) && !empty($postdata))
// {

//   $request = json_decode($postdata);

$nome = $_POST['nome'];//$request->data->nome;//$_POST['nome'];
$senha = "sa"; //$_POST['senha']
$tipo = 1; //$_POST['tipo']

$sql = "INSERT INTO usuarios (nome, senha, tipo) 
VALUES ('" . $nome . "', '" . $senha . "', " . $tipo . ")";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
// }

$conn->close();
?>

<?php

require(__DIR__ . '\..\config.php');
require(__DIR__ . '\jwt.php');
require(__DIR__ . '\..\connect.php');

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $sql = "SELECT * FROM `usuarios` WHERE `usuario` ='{$request->usuario}' LIMIT 1";;
    $result = mysqli_query($conn, $sql);

    if ($result->num_rows == 0) {
        echo json_encode(array(
            "error" => true,
            "message" => "Usuário não encontrado!"
        ));
        die();
    }

    $row = mysqli_fetch_assoc($result);
    if ($row["senha"] != $request->senha) {
        echo json_encode(array(
            "error" => true,
            "message" => "Usuário ou senha incorreta!"
        ));
        die();
    }

    $payload = [
        "id" => $row["id"],
        "nome" => $row["nome"],
        "usuario" => $row["usuario"]
    ];
    $secret = $_CONFIG["JWT"];
    $token = JWT::encode($payload, $secret);
    echo json_encode(array(
        "error" => false,
        "token" => $token
    ));
}

<?php

require './decodeToken.php';

if ($_USUARIO == null) {
    echo json_encode(array(
        "error" => true,
        "message" => "Usuário não encontrado!"
    ));
    die();
}

echo $_USUARIO;
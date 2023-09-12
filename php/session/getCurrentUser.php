<?php

require (__DIR__ . '/decodeToken.php');

// if ($_USUARIO == null) {
//     // http_response_code(500);
//     echo json_encode(array(
//         "error" => true,
//         "message" => "Usuário não encontrado!"
//     ));
//     die();
// }

echo json_encode($_USUARIO, JSON_NUMERIC_CHECK);

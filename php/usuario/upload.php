<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, X-Token-Auth, Authorization");

$folderPath = "uploads/";
$postdata = file_get_contents("php://input");
if (!empty($postdata)) {
    $request = json_decode($postdata);
    $image_parts = explode(";base64,", $request->image);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_base64 = base64_decode($image_parts[1]);
    $file = $folderPath . uniqid() . '.png';
    if (file_put_contents($file, $image_base64)) {
        $response[] = array('sts' => true, 'msg' => 'Successfully uploaded');
    }
    echo json_encode($response);
}


// $target_dir = "uploads/";
// print_r($_FILES);
// $target_file = $target_dir . basename($_FILES["image"]["name"]);

// $uploadOk = 1;

// // Check if file already exists
// if (file_exists($target_file)) {
//     echo "Sorry, file already exists.";
//     $uploadOk = 0;
// }

// // Check if $uploadOk is set to 0 by an error
// if ($uploadOk == 0) {
//     echo "Sorry, your file was not uploaded.";
//     // if everything is ok, try to upload file
// } else {
//     if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
//         echo "The file " . htmlspecialchars(basename($_FILES["image"]["name"])) . " has been uploaded.";
//     } else {
//         echo "Sorry, there was an error uploading your file.";
//     }
// }
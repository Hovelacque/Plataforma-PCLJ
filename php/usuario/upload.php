<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$img = $request->file;

$target_dir = "uploads/";
$target_file = $target_dir . 'photo.png';
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (move_uploaded_file($img, $target_file)) {
    echo "The file has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}

// $img = str_replace('data:image/png;base64,', '', $img);
// $img = str_replace(' ', '+', $img);
// $fileData = base64_decode($img);
//saving
// $fileName = 'photo.png';
// file_put_contents($fileName, $img);//$fileData);

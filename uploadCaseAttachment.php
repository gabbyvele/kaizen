<?php

header("Access-Control-Allow-Origin: *");

if ($_FILES['SelectedFile']['name'] != null) {
    $clientName = "";
    if ($_POST['clientName'] != null){
        $clientName = $_POST['clientName'] . "/";
    }

    $target_dir = "customerUploads/$clientName";

    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0777, true);
    }

    $target_file = $target_dir . date("Y-m-d H:i:s")."_". basename($_FILES["SelectedFile"]["name"]);
    $tmp_dir = $_FILES['SelectedFile']['tmp_name'];

    $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);


    if (move_uploaded_file($_FILES["SelectedFile"]["tmp_name"], $target_file)) {
        echo "true";

    } else {
        echo "false";
    }
}

?>
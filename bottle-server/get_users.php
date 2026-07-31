<?php

include("connection.php");
$sql = "SELECT * FROM users";

$query = $mysql -> prepare($sql);
$query->execute();

$array = $query->get_result();

$response = [];
$response["success"] = true;
$response["data"] = [];

while($user = $array->fetch_assoc()) {
    $response["data"][] = $user;
}

echo json_encode($response);

?>
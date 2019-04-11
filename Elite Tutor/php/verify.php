<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = 'localhost';
$username = 'prinwptz_tutor';
$password = 'Tutor@12';

$con = mysqli_connect($servername, $username, $password);

if(!$con) {
	die('Connection Failed: '.mysqli_connect_error());
}

if(mysqli_select_db($con, 'prinwptz_tutor') == false){
	die('Connection Failed: '.mysqli_select_db_error());
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$phone = $_POST['phone'];
  $code = $_POST['code'];
  $status = 'true';
  
  $sql = "SELECT * FROM `users` WHERE `phone` = $phone && `code`= $code";
  $query = mysqli_query($con, $sql); 

	if(mysqli_num_rows($query) == 1){
    $pick = "UPDATE `users` SET `status`='$status' WHERE `phone` = '$phone'";
    $select = mysqli_query($con, $pick);   

    if ($select) {
        $sql1 = "SELECT * FROM `users` WHERE `phone` = $phone && `code`= $code";
        $query1 = mysqli_query($con, $sql1); 
        $row = mysqli_fetch_array($query1); 
        $response['success'] === true;
        echo json_encode($row);
    } else {    
        $response['success'] === false;
        echo json_encode('Server error');
    }
  } else {    
    $response['success'] === false;
    echo json_encode('Invalid verification code');
  }
}

$con->close();
?>
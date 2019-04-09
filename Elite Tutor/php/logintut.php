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
	$pass = $_POST['password'];

	$sql = "SELECT * FROM `users` WHERE `phone` = '$phone' && `password` = '$pass'";
    $query = mysqli_query($con, $sql);   

    if (mysqli_num_rows($query) == 1) {
        $row=mysqli_fetch_array($query); 
        $response['success'] === true;
        echo json_encode($row);
    } else {    
        $response['success'] === false;
        echo json_encode('Invalid Phone number or Password');
    }
}

$con->close();

?>
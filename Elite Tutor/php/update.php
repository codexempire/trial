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
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname']
  $address = $_POST['address'];
  $dob = $_POST['dob'];
  $gender = $_POST['gender'];
  $email = $_POST['email'];
  $country = $_POST['country'];

    $pick = "UPDATE `users` SET `firstname` = '$firstname' && `lastname` = '$lastname' && `address`='$address' && `dob` = '$dob' && `gender` = '$gender' && email = '$email' && country = '$country' WHERE `phone` = '$phone'";
    $select = mysqli_query($con, $pick);   

    if ($select) {
        $sql1 = "SELECT * FROM `users` WHERE `email` = '$email'";
        $query1 = mysqli_query($con, $sql1); 
        $row = mysqli_fetch_array($query1); 
        if($row[0].email === $email){
          $response['success'] === true;
          echo json_encode($row);
        } else {
          $response['success'] === false;
          echo json_encode('Failed to Update Information');
        }
    } else {    
        $response['success'] === false;
        echo json_encode('Failed to Update Information');
    }
}

$con->close();
?>
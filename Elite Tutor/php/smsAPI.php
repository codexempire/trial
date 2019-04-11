<?php
$owneremail="prestigedish@yahoo.com";
$subacct="NEWAPI";
$subacctpwd="Newjob101";
$sendto= $phone; /* destination number */
$sender= "Elite Tutor"; /* sender id */
$message= "Please, enter this verification code 
$code
to complete your registration";
/* message to be sent */

$url = "http://www.smslive247.com/http/index.aspx?"
. "cmd=sendquickmsg"
. "&owneremail=" . UrlEncode($owneremail)
. "&subacct=" . UrlEncode($subacct)
. "&subacctpwd=" . UrlEncode($subacctpwd)
. "&sendto=" . UrlEncode($sendto)
. "&message=" . UrlEncode($message)
. "&sender=" . UrlEncode($sender);

  $time_start = microtime(true);
  if ($f = @fopen($url, "r"))
  {
  $answer = fgets($f, 255);
  }
  >?

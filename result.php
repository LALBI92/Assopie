<?php

include('curlwrap_v2.php');

$city = strip_tags($_POST['city']);
$name = strip_tags($_POST['name']);
$lot = strip_tags($_POST['lot']);
$email = strip_tags($_POST['email']);
$price = strip_tags($_POST['price']);
$min_reduc = strip_tags($_POST['min_reduc']);
$max_reduc = strip_tags($_POST['max_reduc']);
$fiscalite = strip_tags($_POST['fiscalite']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	header('HTTP/1.1 500 Internal Server Error');
	exit(0);
}

$contact_email = $email;
$contact_json = array(
  "properties"=>array(
    array(
      "name"=>"email",
      "value"=>$contact_email,
      "type"=>"SYSTEM"
    ),  
    array(
        "name"=>"Ville du bien",
        "value"=> $city,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Residence",
        "value"=> $name,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Prix de vente",
        "value"=> $price,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Montant nego mini",
        "value"=> $min_reduc,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Montant nego maxi",
        "value"=> $max_reduc,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Numero lot",
        "value"=> $lot,
        "type"=>"CUSTOM"
    ),
    array(
        "name"=>"Fiscalite",
        "value"=> $fiscalite,
        "type"=>"CUSTOM"
    ),	
  )
);

$contact_json = json_encode($contact_json);
$result = curl_wrap("contacts", $contact_json, "POST", "application/json");
$result = json_decode($result, false, 512, JSON_BIGINT_AS_STRING);

?>

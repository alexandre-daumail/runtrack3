<?php

$host = 'localhost';
$dbname = 'utilisateurs';
$username = 'root';
$password = '';

try {

    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // echo "<p>Connected to $dbname at $host successfully.</p>";
} catch (PDOException $pe) {

    die("Could not connect to the database $dbname :" . $pe->getMessage());
}

//  Récupération de l’ensemble des utilisateurs 
$get = $conn->prepare("SELECT * FROM `utilisateurs`");
$get->execute();
$res = $get->fetchAll(PDO::FETCH_ASSOC);

// Affichage des informations au format json. 
$myJSON = json_encode($res);

echo $myJSON;
<?php
session_start();
$title = "Bienvenue | Page d'accueil";
ob_start();
?>

    <main>
        <h1>Bienvenue!</h1>
    </main>

<?php
$content = ob_get_clean();
require('layout.php');
?>
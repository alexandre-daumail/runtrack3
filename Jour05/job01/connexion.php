<?php
session_start();
$title = "Bienvenue | Page d'accueil";
ob_start();
?>

<main>

    <h1>Connexion</h1>

    <form action="includes/connexion.inc.php">

        <legend>Veuillez remplir tous les champs</legend>

        <fieldset>

            <label for="email">Email</label>

            <input id="email" type="text" name="email">

            <label for="pwd">Mot de passe</label>

            <input id="pwd" type="password" name="password">

        </fieldset>

    </form>

</main>

<?php
$content = ob_get_clean();
require('layout.php');
?>
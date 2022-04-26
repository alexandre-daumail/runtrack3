<?php
session_start();
$title = "Page d'inscription";
ob_start();
?>

<main>

    <h1>Inscription</h1>

    <form action="includes/inscription.inc.php">

        <fieldset>

            <legend>Veuillez remplir tous les champs</legend>

            <label for="prenom">Prénom : </label>
            <input id="prenom" type="text" name="prenom">

            <label for="nom">Nom : </label>
            <input id="nom" type="text" name="nom">


            <label for="email">Email : </label>
            <input id="email" type="text" name="email">

            <label for="pwd">Mot de passe : </label>
            <input id="pwd" type="password" name="pwd">

            <label for="pwd_conf">Confirmation : </label>
            <input id="pwd_conf" type="password" name="pwd_repeat">

            <button type="submit">Inscription</button>

        </fieldset>

    </form>

</main>

<?php
$content = ob_get_clean();
require('layout.php');
?>
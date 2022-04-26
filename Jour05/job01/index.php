<?php
session_start();
$title = "Bienvenue | Page d'accueil";
ob_start();
?>

    <main>

        <?php
            if (isset($_SESSION["login"])) {
                echo "<p>Bonjour " . $_SESSION['login'] ."</p>";
                echo "<a href='logout.php'>Déconnexion</a>";

            } else {
                echo "<a href='inscription.php'>Inscription</a>";
                echo "<a href='login.php'>Connexion</a>";
            }
        ?>

    </main>

<?php
$content = ob_get_clean();
require('layout.php');
?>
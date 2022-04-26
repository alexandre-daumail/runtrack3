<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8" />

    <title><?= $title ?></title>

    <link rel="icon" href="..\public\images\logo.png" type="image/icon type">

    <link href="https://schnaps.it/archive/css/reset.css" rel="stylesheet" />

    <script src="script.js"></script>

    <link href="style.css" rel="stylesheet" />

</head>

<body>
    <header>


    </header>
    <aside>
        <?php
        if (isset($_SESSION["error"])) {
            echo $_SESSION["error"];
            unset($_SESSION["error"]);
        }

        if (isset($_SESSION["success"])) {
            echo $_SESSION["success"];
            unset($_SESSION["success"]);
        }
        ?>
    </aside>


    <?= $content ?>

    <footer></footer>
</body>
</html>
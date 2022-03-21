<!-- 

    Créez une base de données “utilisateurs” contenant une table “utilisateurs” 
et ayant comme champs “id”, “nom”, “prenom” et “email”. 

    Ajoutez des utilisateurs à l’aide de phpmyadmin. Créez une page users.php qui se 
connecte à la base de données, récupère l’ensemble des utilisateurs et 
affiche ces informations au format json.

    Dans votre page index.php, créez un tableau permettant de contenir ces 
informations ainsi qu’un bouton “update”. 

    Lorsque l’on clique sur ce bouton, le tableau doit se mettre à jour et contenir l’ensemble des informations des utilisateurs présents dans la base de données.

Vous pouvez tester votre code en ajoutant/supprimant des utilisateurs à 
l’aide de phpmyadmin entre deux clics. 

-->

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Utilisateurs</title>
</head>

<body>
    <table>
        <thead>
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
            <th>email</th>
        </thead>
        <tfoot>
            <tr>
                <td colspan="4"><input type="button" value="Update" /></td>
            </tr>
        </tfoot>
    </table>
</body>

</html>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Jour 04 | Job 03</title>
</head>

<body>

    <form action="">

        <fieldset>

            <legend>Pokedex</legend>

            <label for="id">ID Pokémon</label>
            <input id="id" type="text" name="id">

            <label for="nom">Nom de pokémon</label>
            <input id="nom" type="text" name="nom">

            <label for="type">Type de Pokémon</label>
            <select id="type" name="type">
                <option value=""></option>
            </select>

            <input type="button" value="Filtrer" id="button">

        </fieldset>

        <table>

            <thead>
                <th>ID Pkmn</th>
                <th>Nom Pkmn</th>
                <th>Type Pkmn</th>
                <th>Base Stats</th>
            </thead>
            <tbody>

            </tbody>
            <!-- <tfoot>
                <tr>
                    <td colspan="4"><input type="button" value="Update" id="button" /></td>
                </tr>
            </tfoot> -->
        </table>


    </form>

</body>

</html>
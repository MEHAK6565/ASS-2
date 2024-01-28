<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Person Object Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script>
        var person = {
            name: "Abeer",
            age: 30,
            occupation: "Web Developer"
        };

        function printPersonDetails(personObj) {
            for (var property in personObj) {
                if (personObj.hasOwnProperty(property)) {
                    console.log(property + ": " + personObj[property]);
                }
            }
        }

        printPersonDetails(person);
    </script>
</body>
</html>

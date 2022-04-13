# nodejs_api
1. Töltsd le a teljes repót és tömörítsd ki a mappát valahova.
2. Nyisd meg a backend mappát console-ban, vagy terminálban!
3. npm i parancs consoleban
4. (opcionális)Ha hibára fut az npm i, akkor töröld ki a modules mappát és a 2db json fájlt, majd írd be a console-ba: npm init
    Lassan nyomkodd az entert, majd az entry pointhoz írd be: server.js
    Entert nyomogasd végig!
    Ezt a 4 parancsot írogasd be: npm i sqlite3, npm i express, npm i cors, npm i fs
    Nem kötelező, de ezt is lefuttathatod: npm audit fix --force
5. Ha nem futott hibára a 3-as pont, akkor hozd létre a db fájlt a db.js fájl futtatásával: node db.js
6. Indítsd el a backend servert így: node server.js
7. Ezt követően használhatod a html fájlokat. add.html-el hozzáadsz új rekordot, index.html-el listázod/módosítod/törlöd az adatot

# Dokumentáció

Önéletrajz bázis

Készítette: Pusztai Enikő

1. Követelményanalízis

1.1. Célkitűzés, projektindító dokumentum

A program legfőbb célja az önéletrajzkezelő felület megvalósítása. Az adatok védelme érdekében legyen lehetőség regisztrációra, majd bejelentkezésre. Bejelentkezett felhasználó új önéltrajzot hozhat létre, módosíthatja, vagy törölheti azt. A felhasználónak lehetősége nyílik más szakemberek értékelésére is. Vendégként bárki megtekintheti az elkészült önéletrajzokat és azok értékeléseit is.

Funkcionális követelmények:

Regisztrációra
Bejelentkezés
Csak bejelentkezett felhasználók által elérhető funkciók
új ital felvételére a listába
a meglévő italok szerkesztésére
a meglévő italok törlésére
komment írása
Nem funkcionális követelmények:

Könnyű áttekinthetőség: Színekkel típus szerint csoportosítás
Használhatóság: Könnyű áttekinthetőség, ésszerű elrendezés, könnyen kezelhetőség
Megbízhatóság: jelszóval védett funkciók, és a jelszavak védelme a háttérben. Hibásan bevitt adatok esetén a program jól láthatóan jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket. A jól bevitt adatok maradjanak az űrlapban.
Karbantarthatóság: könnyen lehessen bővíteni, a különböző típusú fájlok külön csoportosítva, ésszerűen legyenek felbontva, a könnyebb fejleszthetőség miatt
1.2. Szakterületi fogalomjegyzék

Fajták:

Shot: Felespohárban felszolgált, gyakran csak alkoholt tartalmazó ital.
Cocktail: Koktélos pohárban, szirupokkal, gyömülcslevekkel készített ital.
Long drink: Egyszerű long-os pohárban felszolgált ital, gyakran egy fajta alkoholt és üdítőt tartalmaz.
Aperitif: Étkezések előtt, étvágy fokozás céljából fogyasztott ital.
Alap ital: A koktélban legnagyobb arányban részt vevő tömény alkohol.

1.3. Használatieset-modell, funkcionális követelmények

Vendég: Csak a publikus oldalakat éri el

Főoldal
Bejelentkezés
Regisztráció
Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

Új recept felvétele
Meglévő recept megtekintése
Meglévő recept szerkesztése
Meglévő recept törlése
Komment írása


Vegyünk példának egy egyszerű folyamatot:

Meglévő recept szerkesztése:

A felhasználó az oldalra érkezve, bejelentkezik vagy regisztrál
Regisztráció után megtekintheti a recepteket listázó oldalt, ahol kiválaszthatja a szerkeszteni kívánt receptet.
Megnyomja a „Megtekintés” feliratú gombot
A megtekintés oldalon kiválaszthatja a „Szerkesztés” gombot
Szerkesztés oldalon felviszi az új adatokat
Submit gombra kattintva elmenti a változásokat


2. Tervezés

2.1. Architektúra terv

2.1.1. Komponensdiagram



2.1.2. Oldaltérkép:

Publikus:

Főoldal
Bejelentkezés
Regisztráció
Bejelentkezett:

Főoldal
Új koktél felvétele
Listaoldal
Koktél törlése
Koktél megtekintése
Koktél szerkesztése
Komment hozzáfűzése
2.1.3. Végpontok

GET/: főoldal
GET/login: bejelentkező oldal
POST/login: bejelentkező adatok felküldése
GET/login/signup: regisztrációs oldal
POST/login/signup: regisztrációs adatok felküldése
GET/logout: kijelentkező oldal
GET/recipes/list: koktéllista oldal
GET/recipes/new: új koktél felvétele
POST/recipes/new: új koktél felvételéhez szükséges adatok felküldése
GET/recipes/id: koktél adatok
POST/recipes/id: új megjegyzés felvitele
GET/recipes/delete=id: koktél recept törlése
GET/recipes/edit=id: koktél módosítása
POST/recipes/edit=id: koktél módosítása, adatok felküldése
2.2. Felhasználói-felület modell

2.2.1.Oldalvázlatok:

Főoldal 

Regisztrációs oldal 

Bejelentkező oldal 

Koktél listaoldal 

Új koktél felvétele 

Koktél megtekintése 

Koktél szerkesztése 

2.2.2.Designtervek (végső megvalósítás kinézete):

Főoldal 

Regisztrációs oldal 

Bejelentkező oldal 

Koktél listaoldal 

Új koktél felvétele 

Koktél megtekintése 

2.2.3. Osztálymodell

Adatmodell



Adatbázisterv



2.2.4. Dinamikus működés

Szekvenciadiagram

Vegyünk példának a regisztrációt, majd egy új elem felvételét, szerkesztését, törlését, mindezt szekvenciadiagrammon.



3. Implementáció

3.1.1. Fejlesztőkörnyezet

Webes IDE: Cloud9

Github account szükséges
Belépés után új workspace létrehozása (node.js)
Ezután elkezdhetjük a kód írását
git add paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy git add . paranccsal az összes fájlt kiválaszthatjuk
git commit -m "commit" paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben visszatérhetünk, különbségüket megtekinthetjük.
git push origin master paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
Végezetül a Github oldalán leellenőrizhetjük a munkánkat.
3.1.2. Könyvtárstruktúra, funkciók

ckd193-beadando1
config
waterline.js
controllers
index.js
recipes.js
login.js
models
comment.js
recipes.js
recipes.test.js
user.js
user.test.js
views: handlebars (hbs) fájlok
login
index.hbs
signup.hbs
recipes
edit.hbs
list.hbs
new.hbs
show.hbs
index.hbs
layout.hbs
bower.json
package.json
server.js

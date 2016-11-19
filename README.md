# Dokumentáció

### Önéletrajz bázis

Készítette: Pusztai Enikő / I42XKJ

## Követelményanalízis

### Célkitűzés, projektindító dokumentum

A program legfőbb célja az önéletrajzkezelő felület megvalósítása. Az adatok védelme érdekében legyen lehetőség regisztrációra, majd bejelentkezésre. Bejelentkezett felhasználó új önéltrajzot hozhat létre, módosíthatja, vagy törölheti azt. A felhasználónak lehetősége nyílik más szakemberek értékelésére is. Vendégként bárki megtekintheti az elkészült önéletrajzokat és azok értékeléseit is.

### Funkcionális követelmények:

+ Vendégként a főoldalon szeretném megtekinteni az önéletrajzok kategóriáit.
+ Vendégként szeretnék az önéletrajzok között szabadon böngészni.
+ Vendégként szeretnék egy önéletrajzot megtekinteni.
+ Vendégként szeretném egy önéletrajz értékelését megtekinteni.
+ Vendégként szeretnék tudni regisztrálni az oldalra.
+ Felhasználóként szeretnék tudni bejelentkezni az oldalra.
+ Felhasználóként szeretném tudni a profiladatomat szerkeszteni.
+ Felhasználóként szeretnék tudni új önéletrajzot feltölteni.
+ Felhasználóként szeretnék tudni szakembert értékelni.

### Nem funkcionális követelmények:
+ Felhasználóbarát, ergonomikus elrendezés és kinézet.
+ Gyors működés.
+ Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.

### Szakterületi fogalomjegyzék

**Önéletrajz:** Személyes adatgyűjtemény egy munkavállaló eddigi tevénységéről

### Használatieset-modell, funkcionális követelmények

**Vendég:** Csak a publikus funkciókat ér el
+ Publikus oldalak megjelenítése
(önéletrajzok, kategóriák, konkrét önéletrajz, önéletrajz értékelésének megtekintése)

**Bejelentkezett felhasználó:** A publikus funkciókon kívül
+ Új kategória felvitele
+ Saját önéletrajz szerkesztése
+ Saját önéletrajz törlése
+ Szakemberek értékelése

![alt text for image](images/hasznalati_esetek.png)

Vegyünk példának néhány egyszerű folyamatot:

Bejelentkezés:

+ A felhasználó az oldalra érkezve regisztrál
+ Regisztráció után a Belépés gombra kattint
+ Az adatainak kitöltése után a Submit gombra kattintva bejelentkezik

![alt text for image](images/bejelentkezes.png)

## Tervezés

### Architektúra terv

####. Komponensdiagram



##### Oldaltérkép:

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
#### Végpontok

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
### Felhasználói-felület modell

#### Oldalvázlatok:

Főoldal 

Regisztrációs oldal 

Bejelentkező oldal 

Koktél listaoldal 

Új koktél felvétele 

Koktél megtekintése 

Koktél szerkesztése 

#### Designtervek (végső megvalósítás kinézete):

Főoldal 

Regisztrációs oldal 

Bejelentkező oldal 

Koktél listaoldal 

Új koktél felvétele 

Koktél megtekintése 

#### Osztálymodell

Adatmodell



Adatbázisterv



#### Dinamikus működés

Szekvenciadiagram

Vegyünk példának a regisztrációt, majd egy új elem felvételét, szerkesztését, törlését, mindezt szekvenciadiagrammon.



## Implementáció

#### Fejlesztőkörnyezet

Webes IDE: Cloud9

Github account szükséges
Belépés után új workspace létrehozása (node.js)
Ezután elkezdhetjük a kód írását
git add paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy git add . paranccsal az összes fájlt kiválaszthatjuk
git commit -m "commit" paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben visszatérhetünk, különbségüket megtekinthetjük.
git push origin master paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
Végezetül a Github oldalán leellenőrizhetjük a munkánkat.
#### Könyvtárstruktúra, funkciók

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

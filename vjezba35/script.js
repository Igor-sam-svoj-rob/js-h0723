"use strict";

/* HyperText Transfer Protocol je protokol za slanje i primanje podataka na webu. On je klijent/server protokol.
Zahtjev inicijalizira klijent, a server reagira sa odgovorom. Odgovor može biti HTML/CSS/JS/JSON/XML... 

HTTP metode:

1. GET - traži podatke sa servera
2. POST - šalje podatke na server
3. PUT&PATCH - update podataka na serveru (EDIT)
4. DELETE - brisanje podataka na serveru


HTTP status kodovi:

100 - continue

200 - uspjeh, uspješna konekcija
201 - uspješno kreiranje
204 - uspjeh, bez sadržaja

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - error kod klijenta (Bad request)
401 - neautorizian zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što ne postoji više (Not found)

500 - greške na serveru

XMLHttpRequest je objekt ugrađen u našem browseru koji nam omogućava da napravimo zahtjev prema serveru preko AJAX enginea, što nam
na kraju omogućava dinamično ponašanje stranice gdje ćemo dohvatiti podatke bez refresha stranice...
*/

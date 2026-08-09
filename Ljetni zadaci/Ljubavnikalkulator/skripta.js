document.getElementById('btnCreate')?.remove(); 

document.getElementById('btnIzracunaj').addEventListener('click', izracunajLjubav);

function izracunajLjubav() {
    const ime1 = document.getElementById('mojeIme').value.trim().toUpperCase();
    const ime2 = document.getElementById('imeSimpatije').value.trim().toUpperCase();
    
    const kontejnerRezultat = document.getElementById('prostorZaRezultat');
    const ispisMatrice = document.getElementById('ispisPostupka');
    const ispisPostotka = document.getElementById('konacanPostotak');

    if (!ime1 || !ime2) {
        alert("Molimo unesite oba imena!");
        return;
    }

    // Prikaz imena 
    document.getElementById('prikazIme1').textContent = ime1;
    document.getElementById('prikazIme2').textContent = ime2;

    // 1. Korak:
    let brojeviIme1 = prebrojiSlovaUImenu(ime1);
    let brojeviIme2 = prebrojiSlovaUImenu(ime2);
    
    
    let pocetniNiz = brojeviIme1.concat(brojeviIme2);

    
    let povijestRedaka = [];
    povijestRedaka.push(pocetniNiz.join(' '));

    // 2. Korak:
    let konacanNiz = zbrojiVanjskeRekurzivno(pocetniNiz, povijestRedaka);

    
    ispisMatrice.innerHTML = povijestRedaka.join('<br>');
    ispisPostotka.innerHTML = `${konacanNiz.join('')}% Šanse! ❤️`;
    kontejnerRezultat.style.display = 'block';
}


function prebrojiSlovaUImenu(ime) {
    let rezultati = [];
    for (let i = 0; i < ime.length; i++) {
        let slovo = ime[i];
        let brojac = 0;
        for (let j = 0; j < ime.length; j++) {
            if (ime[j] === slovo) brojac++;
        }
        rezultati.push(brojac);
    }
    return rezultati;
}

/**
 * REKURZIVNA FUNKCIJA
 * Zbraja prvi i zadnji broj u nizu, pa drugi i pretzadnji, itd.
 * Ako niz ima neparan broj elemenata, srednji broj se samo prepisuje.
 */
function zbrojiVanjskeRekurzivno(niz, povijest) {
    
    if (niz.length <= 2) {
        return niz;
    }

    let noviNiz = [];
    let lijevi = 0;
    let desni = niz.length - 1;

    while (lijevi <= desni) {
        if (lijevi === desni) {
            
            noviNiz.push(niz[lijevi]);
        } else {
            let zbroj = niz[lijevi] + niz[desni];
            
           
            if (zbroj >= 10) {
                noviNiz.push(Math.floor(zbroj / 10));
                noviNiz.push(zbroj % 10);
            } else {
                noviNiz.push(zbroj);
            }
        }
        lijevi++;
        desni--;
    }

    
    povijest.push(noviNiz.join(' '));

    
    return zbrojiVanjskeRekurzivno(noviNiz, povijest);
}

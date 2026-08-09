document.getElementById('btnCreate').addEventListener('click', pokreniProces);


generirajCiklicnuMatricu(false);

function pokreniProces() {
    generirajCiklicnuMatricu(true);
}

function generirajCiklicnuMatricu(pitajZaNovu = false) {
    const R = parseInt(document.getElementById('redovi').value);
    const S = parseInt(document.getElementById('stupci').value);
    const mod = parseInt(document.getElementById('smjerMod').value);

    
    if (isNaN(R) || R < 2 || R > 50 || isNaN(S) || S < 2 || S > 50) {
        alert("Broj redaka i stupaca mora biti u rasponu od 2 do 50!");
        return;
    }

    const matrica = Array(R).fill().map(() => Array(S).fill(0));
    const ukupno = R * S;

    if (mod >= 1 && mod <= 8) {
        
        popuniOdVanjskihKutova(matrica, R, S, mod, ukupno);
    } else if (mod >= 9 && mod <= 16) {
        
        popuniOdSredinePremaVan(matrica, R, S, mod, ukupno);
    }

    renderHTMLMatrice(matrica, R, S, ukupno);

    
    if (pitajZaNovu) {
        
        setTimeout(() => {
            let odgovor = prompt("Želite li napraviti još jednu matricu? (Unesite 'NE' za prekid, bilo što drugo za nastavak)");
            if (odgovor && odgovor.trim().toUpperCase() === "NE") {
                alert("Program završen.");
            }
        }, 100);
    }
}

function popuniOdVanjskihKutova(matrica, R, S, mod, ukupno) {
    let gore = 0, dolje = R - 1, lijevo = 0, desno = S - 1;
    let r, s, smjerovi;

    
    if (mod === 1 || mod === 5) { r = R - 1; s = S - 1; } // dolje desno
    if (mod === 2 || mod === 6) { r = R - 1; s = 0; }     // dolje lijevo
    if (mod === 3 || mod === 7) { r = 0; s = 0; }         // gore lijevo
    if (mod === 4 || mod === 8) { r = 0; s = S - 1; }     // gore desno

    
    const shemeSmjerova = {
        1: ['L', 'G', 'D', 'DO'],  // kazaljka
        2: ['G', 'D', 'DO', 'L'],  // kazaljka
        3: ['D', 'DO', 'L', 'G'],  // kazaljka
        4: ['DO', 'L', 'G', 'D'],  // kazaljka
        5: ['G', 'L', 'DO', 'D'],  // kontra kazaljke
        6: ['D', 'G', 'L', 'DO'],  // kontra kazaljke
        7: ['DO', 'D', 'G', 'L'],  // kontra kazaljke
        8: ['L', 'DO', 'D', 'G']   // kontra kazaljke
    };

    smjerovi = shemeSmjerova[mod];
    let trenutniSmjerIdx = 0;

    for (let broj = 1; broj <= ukupno; broj++) {
        matrica[r][s] = broj;
        let trenutniSmjer = smjerovi[trenutniSmjerIdx];

        if (trenutniSmjer === 'L') {
            if (s > lijevo) s--;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; dolje--; r--; }
        } else if (trenutniSmjer === 'G') {
            if (r > gore) r--;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; lijevo++; s++; }
        } else if (trenutniSmjer === 'D') {
            if (s < desno) s++;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; gore++; r++; }
        } else if (trenutniSmjer === 'DO') {
            if (r < dolje) r++;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; desno--; s--; }
        }
    }
}

function popuniOdSredinePremaVan(matrica, R, S, mod, ukupno) {

    const mapaModova = {
        9: 1, 10: 3, 11: 2, 12: 4,
        13: 5, 14: 7, 15: 8, 16: 6
    };
    
    let ekvivalentMod = mapaModova[mod];
    let gore = 0, dolje = R - 1, lijevo = 0, desno = S - 1;
    let r, s, smjerovi;

    if (ekvivalentMod === 1 || ekvivalentMod === 5) { r = R - 1; s = S - 1; }
    if (ekvivalentMod === 2 || ekvivalentMod === 6) { r = R - 1; s = 0; }
    if (ekvivalentMod === 3 || ekvivalentMod === 7) { r = 0; s = 0; }
    if (ekvivalentMod === 4 || ekvivalentMod === 8) { r = 0; s = S - 1; }

    const shemeSmjerova = {
        1: ['L', 'G', 'D', 'DO'], 2: ['G', 'D', 'DO', 'L'], 3: ['D', 'DO', 'L', 'G'], 4: ['DO', 'L', 'G', 'D'],
        5: ['G', 'L', 'DO', 'D'], 6: ['D', 'G', 'L', 'DO'], 7: ['DO', 'D', 'G', 'L'], 8: ['L', 'DO', 'D', 'G']
    };

    smjerovi = shemeSmjerova[ekvivalentMod];
    let trenutniSmjerIdx = 0;

    
    for (let broj = ukupno; broj >= 1; broj--) {
        matrica[r][s] = broj;
        let trenutniSmjer = smjerovi[trenutniSmjerIdx];

        if (trenutniSmjer === 'L') {
            if (s > lijevo) s--;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; dolje--; r--; }
        } else if (trenutniSmjer === 'G') {
            if (r > gore) r--;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; lijevo++; s++; }
        } else if (trenutniSmjer === 'D') {
            if (s < desno) s++;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; gore++; r++; }
        } else if (trenutniSmjer === 'DO') {
            if (r < dolje) r++;
            else { trenutniSmjerIdx = (trenutniSmjerIdx + 1) % 4; desno--; s--; }
        }
    }
}

function renderHTMLMatrice(matrica, R, S, ukupno) {
    const tablicaDiv = document.getElementById('izlazTablica');
    tablicaDiv.innerHTML = '';
    
    
    const maxZnamenki = ukupno.toString().length;
    const sirinaCelije = Math.max(45, maxZnamenki * 14 + 16);
    tablicaDiv.style.gridTemplateColumns = `repeat(${S}, ${sirinaCelije}px)`;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < S; j++) {
            const vrijednost = matrica[i][j];
            const celija = document.createElement('div');
            celija.className = 'cell';
            
            
            celija.textContent = vrijednost.toString().padStart(maxZnamenki, ' ');

            if (vrijednost === 1) {
                celija.classList.add('start');
            }

            tablicaDiv.appendChild(celija);
        }
    }
}

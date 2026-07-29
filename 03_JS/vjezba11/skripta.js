const isDev = true


odradi()

function odradi() {
    console.log('Poziv funkcije odradi 1.1.')
}

odradi()

document.getElementById('gumb2').addEventListener('click', odradi)

document.getElementById('gumb3').addEventListener('click', function () {
    console.log('Poziv iz bezimene funkcije')
})

//druga funkcija

function parniBrojevi(odBroja, doBroja) {
    for (let i = odBroja; i <= doBroja; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
parniBrojevi(2, 12)
parniBrojevi(127, 134)


//korisni primjer

function log(poruka) {
    if (!isDev) {
        return
    }
    console.log('\n')
    console.log('+-----------------+')
    console.log(poruka)
    console.log('+-----------------+')
}
log('Prva poruka, testiranje')
log('Osijek')

/**
 * Funkcija daje slucajni broj, ako su dva parametra poslana daje slucajni broj između njih
 * ako je jedan parametar poslan daje slucajni broj od 0 fo tog parametra
 * ako nije poslani 
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns 
 */

function slucajniBroj(odBroja = 0, doBroja = 0) {
    if (odBroja && doBroja) {
        return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0)
    }
    if (odBroja) {
        return (Math.random() * odBroja).toFixed(0)
    }

    return Math.random()
}


slucajniBroj()
const sb = slucajniBroj()
log(sb)

log(slucajniBroj())

for (let i = 0; i < 6; i++) {
    log(slucajniBroj(1, 45))

}
log(slucajniBroj(20))


//4.vrsta

function zbrojPrimBrojeva(odBroja, doBroja) {
    let suma = 0, prim = true
    for (let i = odBroja; i <= doBroja; i++) {
        if (i < 2) {
            continue
        }
        prim = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prim = false
                break
            }
        }
        if (prim) {
            console.log(i)
            suma += i
        }

    }
    return suma
}
log(zbrojPrimBrojeva(-2, 10))
log(zbrojPrimBrojeva(100, 120))

const ime = 'pero'
log(ime.charCodeAt(0))
log(ime.toUpperCase())
console.log('slučaj 2')


function zbroj(broj) {
    if (broj === 1) {
        return 1
    }
    return broj + zbroj(broj - 1)
}
log(zbroj(100))



const hello = () => log('Hello iz arrow') 
hello()

const brojevi = (a,b) => {
    return[a,3,b]
}
log(brojevi(1,2))



;(()=>{
 console.log('Kreirana funkcija i odmah izvedena')
})()
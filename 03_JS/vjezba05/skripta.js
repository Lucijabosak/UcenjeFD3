const uvjet = true

if (uvjet) {
    console.log('Uvjet je tu')
}

if (uvjet) {
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu')
}
else {
    console.log('Uvjet je false')
    console.log('Ušao sam u else granu')

}
console.log(uvjet)
if (uvjet)
    console.log('if bez {} !uvjet')
else
    console.log('else bez {} !uvjet')

// console.log('ispisati kada je false')

const ocjena = 3

if (ocjena === 3) {
    console.log('Dobar')
}
else if (ocjena === 1) {
    console.log('Nedovoljan')
} else if (ocjena <= 0 || ocjena > 5) {
    console.log('Nije ocjena')
}
else if (ocjena === 2) {
    console.log('Dovoljan')
}
else {
    console.log('veće od 3')
}

if(ocjena>1 && ocjena<=5){
    console.log('Ocjena je valjana')
}
else{
    console.log('Nije ocjena')
}

console.log(ocjena>=1 && ocjena <=5 ? 'Ocjena je valjana' : 'Nije ocjena')

const ime = 'Ana'

if(ime){
    console.log('Varijabla ime ima vrijednost')
}
else{
    console.log('Varijabla ime NEMA vrijednost, prazna je -> \'\'')
}

const b = Number ('15a2')
console.log(b)

if(!b){
    console.log('Nisi unio broj')
}
else{
    console.log(b*10)
}
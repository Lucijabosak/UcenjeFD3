console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
// ovo gore nije dobro

console.log('============================')

//ovako treba
for (let i = 0; i < 10; i++) {
    console.log('Edunova')
}

console.log('============================')

//unutar petlje i mjenja vrijednost

for (let i = 0; i < 10; i++) {
    console.log(`i=${i + 1}`)
}

console.log('============================')

//zbrajanje unutar petlje

let suma = 0
for (let i = 0; i < 100; i++) {
    suma += i + 1
    // debugger
}
console.log(suma)

console.log((100 * (100 + 1)) / 2) //kraći put

// nekoliko primjera šetanja s pomoću for petlje

for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log('================================')

for (let i = 7; i < 20; i += 2) {
    console.log(i)
}

console.log('================================')

const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i < kraj; i += uvecanje) {
    console.log(i)
}

console.log('===============================')
// ugnježđivanje petlje

document.write('<table>')
for (let i = 1; i <= 10; i++) {
    document.write('<tr>')
    for (let j = 1; j <= 10; j++) {
        document.write(`<td>${i * j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

console.log('===================')

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue
    }
    if (i === 7) {
        break
    }
    console.log(i)
}

console.log('=======================')

const niz = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < niz.length; i++) {
    console.log(niz[i])
}

console.log('============================')

for (let i = niz.length - 1; i >= 0; i--) {
    console.log(niz[i])
}

// string je tip podatka, string je niz znakova
console.log('=============================')

const ime = 'Nina'
for (let i = 0; i < ime.length; i++) {
    console.log(ime[i])
}

//beskonačna petlja
const spavaj = (ms) => new Promise(r => setTimeout(r, ms))

async function odradi() {
    for (; ;) {
        document.getElementById('lista').innerHTML
            = '<li>' + (Math.floor(Math.random() * 1000) + 1) + '</li>'
            + document.getElementById('lista').innerHTML
          break

        await spavaj(1500)
    }


}

odradi()
const ime = 'Marko'

console.log(ime)

console.log(typeof ime)

console.log('ime', typeof ime, ime)

console.log(`Dobar dan, ${ime}!`)

const unosGodina='2026'

const godina = Number(unosGodina)
console.log('unos godina', typeof unosGodina,
     unosGodina,
    'godina', typeof godina, godina
)

const pi = parseFloat('3.14')
console.log('pi', typeof pi, pi)

const logickaVrijednost = true
console.log('logickaVrijedost', typeof logickaVrijednost, logickaVrijednost)

// logickaVrijednost = false

let broj = 7
console.log('broj', typeof broj, broj)

// let broj = 8

broj = 8
console.log('broj', typeof broj, broj)

broj = 'Osijek'
console.log('broj', typeof broj, broj)

var x=8
console.log('x', typeof x, x)

x='8'
console.log('var x', typeof x, x)

var x = true 
console.log('var x', typeof x, x)

const velikiBroj = 51549562654845614651666465n
console.log('velikiBroj', typeof velikiBroj, velikiBroj)

let varijabla;
console.log('varijabla', typeof varijabla, varijabla)

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)

const osoba = {
    id: 1,
    ime: 'Marko',
    placa: 2345.99,
    zaposlen: true
}
console.log('osoba', typeof osoba, osoba)
console.table(osoba)

const niz = [1,2,3,4,5,6,4,7,8,5,5]
console.log('niz', typeof niz, niz)
console.table(niz)

const json = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.table(json)


function pozdrav(){
    console.log('Pozdrav iz funkcije!')
}
console.log('pozdrav', typeof pozdrav)
pozdrav()

const pozdravi = () => console.log('Pozdrav iz nove funkcije!')
console.log('pozdravi', typeof pozdravi)
pozdravi()

const id1 = Symbol('Edunova')
const id2 = Symbol('Edunova')
console.log('id1', typeof id1, id1)
console.log('id2', typeof id2, id2)

console.log('7'== 7) 
console.log('7'=== 7)
console.log(7 === 7)

console.log(id1 == id2)
console.log(id1 === id2)




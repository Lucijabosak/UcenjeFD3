const t1 = 4

const prazanNiz = []
console.log('prazanNiz', prazanNiz)

console.log('prazanNiz.length', prazanNiz.length)
const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8]

console.log('temp', temp)
console.table(temp)

console.log('Prvi element niza', temp[0])

console.log('Zadnji element niza', temp[temp.length - 1])
console.log('27 iz niza temp', temp[5])

// temp = []
temp[5] = 28
console.table(temp)

temp.length = 10
console.table(temp)

temp.length = temp.length + 1
temp[temp.length - 1] = 77
console.table(temp)
temp[110] = -1
console.table(temp)
console.log(temp[11])
console.log(temp.length)


const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Rijeka',
    'Dubrovnik',
    'Zadar'
]
console.table(mjesta)

const ptp = [
    'Edunova',
    7,
    18n,
    true,
    [],
    undefined,
    null,
    { ime: 'pero' },
    Symbol('e')
]
console.log(ptp)
console.log(ptp[7])
console.log(ptp[7].ime)
console.log(ptp[7]['ime'])

const osobe = [
    {
        ime: 'Jakov',
        prezime: 'Bosak',
        godine: 4
    },
    {
        ime: 'Leon',
        prezime: 'Bosak',
        godine: 2
    },
    {
        ime: 'Renato',
        prezime: 'Bosak',
        godine: 36
    },
    {
        ime: 'Lucija',
        prezime: 'Bosak',
        godine: 28
    },
]
console.table(osobe)

const sumaGodina = osobe[0].godine + osobe[1].godine+osobe[2].godine+osobe[3].godine
console.log(sumaGodina)

const niz = [10,20,30]
const [e1, e2] = niz
console.log(e1,e2,niz)

const [,,e3] = niz
console.log(e3)

niz.length = 0
const [x1=1,x2=20]= niz
console.log(x1,x2)

const n1 = [1,2,3]
const novi = n1
novi[0] = 7
console.log(n1)

const kopija = [...n1]
kopija[0] =9
console.log(kopija, n1)

const gradovi = ['Osijek', 'Zagreb']
const sela = ['Habjanovci', 'Tenja']
const hr = [...gradovi, ...sela]
console.log(hr)
document.getElementById('naslov').innerHTML = hr[1]

const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(tablica[1][2])
console.table(tablica)


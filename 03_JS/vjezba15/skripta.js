
// OOP - Objektno orjentirano programiranje

// probajte naučiti napamet što je klasa i što je objekt (I1 i I2)


// I1: Klasa je opisnik objekta

class Osoba{
    // OOP princip učahurivanja (encapsulation)
    // 1. Klasa ć sakriti svoja svojstva
    #ime // # označavaju da se radi o skrivenom privatnom svojstvu

    // 2. Klasa će učiniti svoja svojstva dostupna putem get i set metoda
    get ime(){return this.#ime}
    set ime(s){this.#ime=s}

    // konstruktor koji se poziva s ključnom rječju new
    constructor(ime=''){
        this.#ime=ime
    }
}

// I2: Objekt je pojavnost (instanca) klase
// varijabla osoba je instanca klase Osoba
const osoba = new Osoba()
osoba.ime = 'Pero' // ovdje se poziva set

console.log(osoba.ime) // ovdje se poziva get

const o = new Osoba('Marko')

console.log(o.ime)

// OOP princip nasljeđivanje
// Klasa će nasljediti metode nadklase, jedna klasa može naljsditi samo jednu nadklasu

class Polaznik extends Osoba{
    #odradioObaveze
    get odradioObaveze(){return this.#odradioObaveze}
    set odradioObaveze(b){this.#odradioObaveze=b}
    constructor(ime='', oo=false){
        super(ime) // ime osobe prosljeđujem konstruktoru klase Osoba, on će znati što s tim
        this.#odradioObaveze=oo
    }
}

// Čitanje o OOP principima:
// https://github.com/tjakopec/OOP_JAVA_PHP_PYTHON_SWIFT

const p = new Polaznik('Karlo',true)

console.log(`${p.ime} ${p.odradioObaveze ? 'je' : 'nije'} odradio obaveze`)

console.log(p)


class Predavac extends Osoba{
    #vrsta
    get vrsta(){return this.#vrsta}
    set vrsta(s){this.#vrsta=s }

    toString(){
        return `${this.vrsta} ${super.ime}`
    }
}

const pr = new Predavac()
pr.ime='Gordana'
pr.vrsta='Vanjska suradnica'

console.log(pr)
console.log(`${pr}`)


// metode u klasi se koriste na objektima, ne klasama
// metode u klase se mogu korsititi i na klasama ali moraju biti static

console.log(Math.random())

class Pomocno{
    static slucajniBroj(){
        return Math.random()
    }
}

console.log(Pomocno.slucajniBroj())
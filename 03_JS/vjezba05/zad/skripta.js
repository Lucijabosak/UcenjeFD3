const rezultat = document.getElementById('rezultat')
document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''

    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value
    if (zadatak === '1') {
        const a = Number(aString)
        if(!a){
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }
        const b = Number(bString)
        if(!b){
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }
        rezultat.innerHTML = a > b ? a : b
        rezultat.style.color = 'green'
    }


    if(zadatak=== '2'){

    }


    if(zadatak=== '3'){
        
    }
})

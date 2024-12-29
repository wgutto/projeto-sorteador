document.getElementById('button').addEventListener('click', () => {
    let numbermax = document.getElementById('number-drawer-max').value

    if(numbermax > 0) {
        let luckyNumber = Math.floor(Math.random() * numbermax)

        document.getElementById('drawn-number').innerHTML = `Número sorteado é: ${luckyNumber}`
    } else {
        document.getElementById('drawn-number').innerHTML = `[ERRO] Digite um número maior que 0`
    }
})
const qualMes = prompt("Digite um número para saber o mês")

const meses = document.querySelector('#meses')

if (qualMes == 1) {
    meses.innerHTML = "Você digitou o mês de Janeiro"
}
else if (qualMes == 2) {
    meses.innerHTML = "Você digitou o mês de Fevereiro"
}
else if (qualMes == 3) {
    meses.innerHTML = " Você digitou o mês de Março"
}
else if (qualMes == 4) {
    meses.innerHTML = "Você digitou o mês de Abril"
}
else if (qualMes == 5) {
    meses.innerHTML = "Você digitou o mês de Maio"
}
else if (qualMes == 6) {
    meses.innerHTML = "Você digitou o mês de Junho"
}
else if (qualMes == 7) {
    meses.innerHTML = "Você digitou o mês de Julho"
}
else if (qualMes == 8) {
    meses.innerHTML = "Você digitou o mês de Agosto"
}
else if (qualMes == 9) {
    meses.innerHTML = "Você digitou o mês de Setembro"
}
else if (qualMes == 10) {
    meses.innerHTML = "Você digitou o mês de Outubro"
}
else if (qualMes == 11) {
    meses.innerHTML = "Você digitou o mês de Novembro"
}
else if (qualMes == 12) {
    meses.innerHTML = "Você digitou o mês de Dezembro"
} else {
    meses.innerHTML = "Você digitou um mês incorreto"
}

console.log(qualMes.typeof);
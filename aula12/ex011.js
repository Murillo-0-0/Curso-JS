var idade = 21
console.log(`Você tem ${idade} anos.`)
if (idade < 18) {
    console.log(`Não vota`)
} else if (16 < idade < 18 || idade > 70) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*
console.log(valores)
for (pos = 0; pos <= valores.length; pos++){
    console.log(valores[pos])
}
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
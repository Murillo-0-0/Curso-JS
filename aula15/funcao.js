function parimp(n){
    if (n % 2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

var res = parimp(9)
console.log(res)
/* function fat(n) {
    var res = 1
    var c = 1
    while (c <= n){
        res *= c
        c++
    }
    return res
} */

function fatorial(n){
    let res = 1
    for(let c = n; c > 1; c--){
        res *= c
    }
    return res
}

console.log(fatorial(5))
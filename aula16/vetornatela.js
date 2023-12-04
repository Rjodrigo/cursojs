/*
let valores = [8, 1, 7, 4, 2, 9];

console.log([0]);

for(let pos=0; pos < valores.length; pos++) { // atribuição 0 a "pos" enquanto "pos for menor que o "valores.length" o pos vair receber pos++
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}.`)
}
*/
for(let pos in valores) { // para cada posição em "num" eu vou mostrar o (num[pos])  
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
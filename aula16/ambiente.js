let num = [5, 8, 2, 9, 3];  
num.push(1)  //acrescenta o numero 1 dentro da variavel composta
num.sort() //este coloca a variavel os elementos em ordem crescente
console.log(num) //compila a variavel
console.log(`O vetor tem ${num.length} posições.`); //mostra quantos elementos tem dentro da variavel num 
console.log(`O valor da segunda posição é ${num[1]}.`); // Mostra oque existe no elemento 1 na variavel num
let pos = num.indexOf(8);
 if (pos == -1) {
    console.log(`O valor não foi encontrado`)
 } else {
    console.log(`O valor 8 esta na posição ${pos}`); // O valor de 8  esta em questão está em 4 porque foi ordenado primeiro um num.sort() 
 }

 /*No caso aqui este comando mostrou e ordenou os elementos em forma crescente 
  * Adicionou o elemento 1
  * Mostrou quantas posições 
  * Mostrou o valor do primeiro elemento ...
  */ 

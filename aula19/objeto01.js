let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}};

amigo.engordar(2) //Engordar aqui é uma função!
console.log(`${amigo.nome} pesa ${amigo.peso} Hg.` );
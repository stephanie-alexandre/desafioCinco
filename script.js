// Crie um array que receba 5 itens e exiba no console.
let cores=[ "Vermelho", "Azul", "Roxo", "Rosa"]
console.log(cores)

// Utilize um método para adicionar um nome ao inicio do array.
let pets=["Cachorros", "Gatos"]
pets.unshift("Roedores")
console.log(pets)

// Utilize um método para remover o último nome do array.
let cabelo=["Curto", "Médio", "Longo"]
cabelo.splice(2)
console.log(cabelo)

// Utilize um método para adicionar dois nomes ao fim do array.
let bebidas=["Suco", "Refri"]
bebidas.push("Água")
console.log(bebidas)
// Utilize um método para remover o primeiro nome do array.
let jogos=["Super Mário", "candy crush", "Minecraft"]
jogos.shift()
console.log(jogos)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort (function(a,b){
    return (a - b)
})

console.log(numbers)

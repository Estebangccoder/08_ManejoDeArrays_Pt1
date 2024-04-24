console.groupCollapsed("Creacion de Arrays")
const array1 = new Array
const array2 = Array("a", "b", "c")
const array3 = []

console.log(array1)
console.log(array2)
console.log(array3)

console.groupEnd()


console.groupCollapsed("Consultar datos del array")

const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]


console.log(`El array tiene ${array.length} elementos`)
console.log(array[5])
console.log(array.at(5))
console.log(array.at(-1))
console.log(array.includes("mundo")) // si lo encuentra en el array retornara un true si no un false
console.log(array.indexOf("mundo")) // Devuelve la primera posicion de coincidencia
console.log(array.lastIndexOf("mundo"))// Devuelve la ultima posicion de coincidencia
console.group("Encontrar todas las coincidencias")
var indices = [];
var arrays = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = arrays.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = arrays.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
console.groupEnd()
console.groupEnd()

console.groupCollapsed("actualizar datos del array")
console.log(array)
array[5] = "hello"
console.log(array)
console.groupEnd()

console.groupCollapsed("agregar datos del array")

console.log(array)
array.push("bravo")// Agrega en la última posicion del array
console.log(array)
array.push("charlie")
console.log(array)
array.push("delta")
console.log(array)
array.unshift("1")
console.log(array)
array.unshift("2")// Agrega en la primera posicion del array
console.log(array)
console.groupEnd()

console.groupCollapsed("eliminar datos del array")

console.info(array)
array.pop() // Eliminar el ultimo elemento del array
console.info(array)
array.shift() //Eliminar el primer elemento del array
console.info(array)
delete array[2] // Deja vacía la posicion que se indique del array, lo deja como empty
console.info(array)
console.groupEnd()

console.groupCollapsed("Sumar arrays")

const objeto1={
    nombre: "alpha",
    apellido: "bravo",
}

const objeto2={
    edad: "26 años",
    ciudad: "medellín",
}

const objeto3={...objeto1, ...objeto2} //Creamos un objeto nuevo qu almacena a las variables del objeto 1 y elobjeto 2
console.log(objeto3) 

console.log(objeto2)

Object.assign(objeto1,objeto2)
console.log(objeto1)


let primerosNumeros=[1, 2, 3, 4, 5]
let segundosNumeros=[6, 7, 8, 9, 10]

console.log(primerosNumeros)
console.log(segundosNumeros)

primerosNumeros.concat(segundosNumeros)
console.log(primerosNumeros.concat(segundosNumeros))
console.groupEnd()


console.group("Listar información")

let listaSupermercado =[
    "arroz",
    "pan",
    "arepa",
    "agupanela",
    "huevos",
    "guaro",
    "pescado",
    "leche",
    "carne"
]

console.groupCollapsed("Desplegar lista con FOR")
for(let j=0;j<listaSupermercado.length;j++){
    console.info(`${j+1}. ${listaSupermercado[j]}`)
}
console.groupEnd()

console.groupCollapsed("Desplegar lista con While")
let i=0

while (i<listaSupermercado.length){
    console.info(`${i+1}. ${listaSupermercado[i]}`)
    i++
}
console.groupEnd()


console.groupCollapsed("Desplegar lista con FOR OF")
for (const producto of listaSupermercado) {
    console.info(`${listaSupermercado.indexOf(producto)+1}. ${producto}`)
}

console.groupEnd()


console.groupCollapsed("Desplegar lista con FOREACH")

listaSupermercado.forEach((producto, index) =>{
    console.info(`${index+1}. ${producto}`)
    i++
})


console.groupEnd()

console.groupCollapsed("Modificando el array incial")

listaSupermercado = listaSupermercado.map(producto => (producto.toUpperCase()))

listaSupermercado = listaSupermercado.map(producto => {
    return producto.toUpperCase()
    
} )

console.groupEnd()
console.groupEnd()
// console.group(" arrays")

// console.groupEnd()
// console.group(" arrays")

// console.groupEnd()
// console.group(" arrays")

// console.groupEnd()
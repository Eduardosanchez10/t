//Contar cuántas veces aparece un valor en un array. 
const array = [ 1,2,3,4,5,6,7,1 ];
const value = 1;

const contar = array.filter((C) => C ===value).length
console.log(contar);

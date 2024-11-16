//duplicado en un array  
const array = [ 1,5,4,8,9,1,2,4 ];

const Unico = array.filter((a,b)=>array.indexOf(a)===b)

console.log(Unico)
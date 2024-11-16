//Encontrar el número mayor en un array.

const array = [ 5,1,8,9,3 ];

const M = array.reduce((acc,next)  =>{
  if(acc>next){
    return acc;
  }else{
    return  next;
  }
})
console.log(M)//hecho en clase
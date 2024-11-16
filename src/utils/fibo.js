export function fibo(num){
  const fib=[0, 1]

  if (num < 0){
    const error = 'El número introducido no debe ser menor que 0'
    return error
  } 
  else{

  
  

    for (let i = 2; i <= num; i++){
      fib[i] = fib[i-1] + fib[i-2]
    }

    return fib[num]
  }

  
}
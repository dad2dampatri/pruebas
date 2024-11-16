export function isBounded(v){

  const amount=v;
  if ((amount < 1) || (amount > 1000)){
    return false

  } else{
    return true
  }

}
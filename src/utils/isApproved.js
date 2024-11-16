export function isApproved(vnota) {
 //nodo 1
  const nota = vnota;
       //nodo 2    nodo 3
  if ((nota<0) || (nota > 10)) {
    //nodo 4
    return null
  } else {
        //nodo 5
    if (nota <5) {
      //nodo 6
      return false
    } else {
      //nodo 7
      return true
    }
  }
}
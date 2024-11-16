//Aquí hago una calculadora que sume, reste, multiplique y divida.
//Pido por teclado dos números
import React from 'react'
import {useState} from 'react'
import { sum } from './utils/sum'

export default function Suma () {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  

  const handleInput1 = (e) => {
    setNum1(e.target.value)
    console.log(e.target.value)
  }

  const handleInput2 = (e) => {

    setNum2(e.target.value)
    console.log(e.target.value)
  }

  const resultado = sum(num1, num2)
  return(
    <>
      <input type='string' label='Número 1' value={num1} onChange={handleInput1}/>
      <input type='number' label='Número 2' value={num2} onChange={handleInput2}/>

      <label>{resultado}</label>
    </>
    // <input>Número 1</input>
    // <input>Número 2</input>


  )


}
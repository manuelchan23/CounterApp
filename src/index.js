import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import './index.css'
import CounterApp from './CounterApp'
//const  saludo = <h1>hola mundo</h1>

const divRoot = document.getElementById('root')

ReactDOM.render( <CounterApp value = {29}/> ,divRoot)


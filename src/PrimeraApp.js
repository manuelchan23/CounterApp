//Functional components
//import React,{Fragment} from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, nombre }) =>{

  const primeraApp= <>

    <h1> { saludo } </h1>
    <h1>{nombre}</h1>
  </>
  return primeraApp

}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
  nombre : 'Mundo'
}
export default PrimeraApp
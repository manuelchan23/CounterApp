import React,{ useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ value }) =>{

  const [counter,setCounter] = useState(value)
  // console.log(counter)

  const addCounter = (e) =>{
    setCounter(counter+1)
    // setCounter( (c) => c+1)
  }
  const subtractCounter = (e) => setCounter(counter-1)
  const resetCounter = (e) => setCounter(value)

  return(
    <>
      <h1>CounterApp</h1>
      <h2> { counter }</h2>
      <button onClick={ subtractCounter }>-1</button>
      <button onClick={ resetCounter }>reset</button>
      <button onClick={ addCounter } >+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

// CounterApp.defaultProps = {
//   value: 0
// }

export default CounterApp
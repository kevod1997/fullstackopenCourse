import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  // const [positivePercentage, setPositivePercentage] = useState(0)

  const addGood = ()=>{
    setGood(good+1)
    setAverage((good+1 - bad) / (good+neutral+bad+1))
    // setPositivePercentage((good+1) / (good+neutral+bad+1) * 100)
  }
  const addNeutral = ()=>{
    setNeutral(neutral+1)
    setAverage((good - bad) / (good+neutral+bad+1))
    // setPositivePercentage(good / (good+neutral+bad+1) * 100)
  }
  const addBad = ()=>{
    setBad(bad+1)
    setAverage((good - bad - 1) / (good+neutral+bad+1))
    // setPositivePercentage(good / (good+neutral+bad+1) * 100)
  }
 
  const porcentage = (good / (good+neutral+bad)*100)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=> addGood()}> good </button>
      <button onClick={()=> addNeutral()}> neutral </button>
      <button onClick={()=> addBad()}> bad </button>
      <h1>statistics</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
      <p>all {good+neutral+bad}</p>
      <p>average {average} </p>
      <p> porcentage {!porcentage? 0 : porcentage.toFixed(2)}%</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


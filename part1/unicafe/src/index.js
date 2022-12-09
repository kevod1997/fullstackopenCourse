import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useState } from 'react'
import Button from './components/Button';
import StatisticLine from './components/StatisticLine ';

const Statistics = ({ good, neutral, bad, average, positivePercentage }) => {
  const all = good + neutral + bad;
  return (
    <div>
      <h1>statistics</h1>
      {all === 0 ? (
        "No feedback given"
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <td>good</td>
                <td>{good}</td>
              </tr>
              <tr>
                <td>neutral</td>
                <td>{neutral}</td>
              </tr>
              <tr>
                <td>bad</td>
                <td>{bad}</td>
              </tr>
              <tr>
                <td>all</td>
                <td>{all}</td>
              </tr>
              <tr>
                <td>average</td>
                <StatisticLine average={average} />
              </tr>
              <tr>
                <td>porcentage</td>
                <td>{positivePercentage.toFixed(2)}%</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)

  const addGood = ()=>{
    setGood(good+1)
    setAverage((good+1 - bad) / (good+neutral+bad+1))
     setPositivePercentage((good+1) / (good+neutral+bad+1) * 100)
  }
  const addNeutral = ()=>{
    setNeutral(neutral+1)
    setAverage((good - bad) / (good+neutral+bad+1))
     setPositivePercentage(good / (good+neutral+bad+1) * 100)
  }
  const addBad = ()=>{
    setBad(bad+1)
    setAverage((good - bad - 1) / (good+neutral+bad+1))
     setPositivePercentage(good / (good+neutral+bad+1) * 100)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button addGood={addGood} addBad={addBad} addNeutral={addNeutral} />
      <Statistics good={good} neutral={neutral} bad={bad} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


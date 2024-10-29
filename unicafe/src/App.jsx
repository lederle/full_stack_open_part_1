import React from 'react';
import { useState } from 'react';

function StatisticLine({text, value}) {
  return (
    <div>{text} {value}</div>
  );
}

function Button({onClick, text}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
function Statistics({good, neutral, bad, total, score}) {
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={total} />
      <StatisticLine text={"average"} value={total === 0 ? 0 : score / total} />
      <StatisticLine text={"positive"} value={`${total == 0 ? 0 : 100 * good / total}%`} />
    </div>
  );
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  function handleGood() {
    setTotal(total + 1);
    setScore(score + 1);
    setGood(good + 1);
  }
  function handleNeutral() {
    setTotal(total + 1);
    setNeutral(neutral + 1);
  }
  function handleBad() {
    setTotal(total + 1);
    setScore(score - 1);
    setBad(bad + 1);
  }

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text={"good"} />
        <Button onClick={handleNeutral} text={"neutral"} />
        <Button onClick={handleBad} text={"bad"} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score}/>
    </>
  )
}

export default App;

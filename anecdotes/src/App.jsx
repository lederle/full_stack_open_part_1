import { useState } from "react";

function DisplayMaxVote({ maxAnecdote, maxVote }) {
  return (
    <>
      <h2>Anecdote with the most votes</h2>
      <div>
        <b>{maxAnecdote}</b>
        <div>has {maxVote} votes</div>
      </div>
    </>
  );
}
function DisplayVote({ votes, selected }) {
  return <div>has {votes[selected]} votes</div>;
}

function DisplayAnecdote({ anecdote, selected }) {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>
        <em>{anecdote[selected]}</em>
      </div>
    </>
  );
}

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, incrementVote] = useState(new Array(anecdotes.length).fill(0));

  function getNextIndex(n) {
    return Math.floor(Math.random(0) * n);
  }

  function handleClick() {
    setSelected(getNextIndex(anecdotes.length));
  }

  function handleVote() {
    const newVoteCount = [...votes];
    newVoteCount[selected] += 1;
    incrementVote(newVoteCount);
  }

  return (
    <>
      <DisplayAnecdote anecdote={anecdotes} selected={selected} />
      <DisplayVote votes={votes} selected={selected} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <DisplayMaxVote
        maxAnecdote={anecdotes[votes.indexOf(Math.max(...votes))]}
        maxVote={Math.max(...votes)}
      />
    </>
  );
}

export default App;

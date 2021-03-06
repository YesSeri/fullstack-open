import React, { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0)

    const handleClick = () => {
        setSelected(randomNumber(anecdotes.length));
    }
    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1;
        setVotes(copy)
    }

    return (
        <div>
            <h1>anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClick}>next anecdote</button>
            <h1>most upvoted anecdote</h1>
            <p>{anecdotes[mostUpvotedIndex(votes)]}</p>
        </div>
    )
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function mostUpvotedIndex(votes) {
    let index = 0
    for (let i = 1; i < votes.length; i++) {
        if (votes[index] < votes[i]) {
            index = i;
        }
    }
    return index;
}

export default App
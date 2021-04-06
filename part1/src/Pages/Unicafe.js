import React, { useState } from 'react'

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <IncreaseButton setValue={setGood} value={good} text={"good"} />
            <IncreaseButton setValue={setNeutral} value={neutral} text={"neutral"} />
            <IncreaseButton setValue={setBad} value={bad} text={"bad"} />
            {good + neutral + bad === 0 ? <><h1>statistics</h1><p>no feedback given</p></> : <Statistics good={good} neutral={neutral} bad={bad} />}
        </div>
    )
}
const IncreaseButton = ({ setValue, value, text }) => (
    <button onClick={() => setValue(value + 1)}>{text}</button>
)
const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <Statistic text={'good'} value={good} />
                    <Statistic text={'neutral'} value={neutral} />
                    <Statistic text={'bad'} value={bad} />
                    <Statistic text={'all'} value={total} />
                    <Statistic text={'average'} value={(good - bad) / total} />
                    <Statistic text={'positive'} value={good / total * 100 + "%"} />
                </tbody>
            </table>
        </>

    )

}
const Statistic = ({ text, value }) => (
    <tr>
        <td>{text} {value}</td>
    </tr>
)

export default Unicafe

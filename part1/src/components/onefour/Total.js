
const Total = ({ parts }) => {
    const exercises = parts.map(part => (part.exercises))
    return (
        <p>Number of exercises {exercises.reduce((acc, curr) => acc + curr)}</p>
    )
}

export default Total;
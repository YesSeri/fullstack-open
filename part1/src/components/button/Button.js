import React, { useState } from 'react'

const Button = ({ children, text }) => {
    const [visibile, setVisibile] = useState(false)
    const handleClick = () => {
        setVisibile(!visibile)
    }
    return (
        <>
            <button onClick={handleClick}>{text}</button>
            { visibile ? { ...children } : null}
        </>
    )
}

export default Button

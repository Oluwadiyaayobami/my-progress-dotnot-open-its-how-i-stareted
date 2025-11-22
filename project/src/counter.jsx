import React,{useState} from "react"
function Counter(){


    const [value ,setvalue] = useState(0)
    const increments = () => {
        setvalue(value + 1)
    }
    
    const resets = () => {
        setvalue(0)
    }

    const decrements = () => {
        setvalue(value - 1)
    }


    return (
        <div>
            <p>{value}</p>
            <button onClick={increments}>increment</button>
            <button onClick={resets}>reset </button>
            <button onClick={decrements}>decrement</button>
        </div>
    )

}
export default Counter 
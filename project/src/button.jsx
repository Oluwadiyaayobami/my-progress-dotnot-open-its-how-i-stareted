import React, { useState } from "react"
function Button(){

    
    const [name, setname ] = useState('guest ')

    const change =  () => {
        setname ('ayobami bright ');
    }
    const [age , setage ] = useState(0)
    const updatecount = () => {
        setage(2)

    }
    const [count ,setcount] = useState(0)
    const updatecounts = () => {
        
        setcount(count +1 )

    }

    
    

    return(
        <div>
            <p>welcome: {name} </p>
            <p>let user agee : {age}</p>
            <p>{count }</p>
            <button onClick={updatecounts}>click me to count </button>
            <button onClick ={change}>click me </button>
            <button onClick={updatecount}>user age check </button>
        </div>
    )

}
export default Button



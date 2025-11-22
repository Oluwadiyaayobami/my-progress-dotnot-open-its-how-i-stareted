import React, {useState} from "react"
function Uchange(){

const [word , setnewtext]= useState('pls enter a word ')
const handleunchange =(e) =>  {
    setnewtext(e.target.value)

}
return (
    <div>
        <input value={word} onChange={handleunchange}/>
        <p onChange={handleunchange}>welcome :{word}</p>
    </div>
)

}
export default Uchange
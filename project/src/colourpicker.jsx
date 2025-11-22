import React, {useState} from "react"
import  './index.css'
function Colourpicker(){

    const [colour,setcolour]=useState('#ffffff')
    const handlecolour =(e) =>{
        setcolour(e.target.value)

    }
// basicaly what this function does is that it changes the value of our colour to the one we picked in real time that all useing onchange allow usersto change the value of an inpute real time 
    return(
        <div className="colour-picker-container">
            <p className="title">colour picker </p>
            <div className="colour_picker_box" style={{background: colour}}>
                <p className="coourpicked">you picked this colour {colour} </p>
            </div>
            <label className="select-colour">select a colour </label>
            <input type="color" value={colour} onChange={handlecolour} className="input"/>
        </div>  
    )

}
export default Colourpicker
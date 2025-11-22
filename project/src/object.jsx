import React,{useState} from "react"
function Object (){
    const [current,setcurrent] = useState({
        name: 'ayobami', age : '17', year : 'year 12'
    })
    const handlenamechange =(e) => {
        setcurrent({...current,name :e.target.value})
    }

    const handleyearchange =(e) => {
        setcurrent({...current,year :e.target.value})
    }
    const handleagechange =(e) => {
        setcurrent({...current,age :e.target.value})
    }
    return(
        <div>
            <p>my name is {current.name}, ima {current.age} years old and ima in {current.year}</p>
            <input type= "text" placeholder="pls input ur name " value={current.name} onChange={handlenamechange}/><br/>
            <input type= "age" placeholder="pls input ur age " value={current.age} onChange={handleagechange}/><br/>
            <input type= "text" placeholder="pls input ur class " value={current.year} onChange={handleyearchange}/><br/>

        </div>
    )

}
export default Object
import React,{useState, createContext} from "react";
import ComponetB from './componetB'
import Componet3 from "./componet3";
export const usernamecontext = createContext()
function ComponetA (){
    const [username, setusername] = useState('ayobami')

    const handleuserchange =(event) => {
        setusername(event.target.value)
    }
    return(
        <div>
            <h1>componetA</h1>
                  <p>{`hello ${username}`}</p>
                  <input type="text"  placeholder="enter your name  " onChange={handleuserchange}/>
            <usernamecontext.Provider value={username}>
                    <ComponetB/>
                    <Componet3/>
            </usernamecontext.Provider>
           
           


            

        </div>
    )
    

}
export default ComponetA


// basically usecontext and cerate contest work hand in hnad together u use cerate contest in the elemetnt that has the value and cerate an export of the value after wrrapp all element that want to have acces to the value in ur usecontext .provider and pass in the value 
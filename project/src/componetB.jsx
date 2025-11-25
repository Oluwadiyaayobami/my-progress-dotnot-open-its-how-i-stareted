import React ,{useContext}from "react";
import { usernamecontext } from "./componetA";
function ComponetB (){
    const value = useContext(usernamecontext)
    return(
        <div>
            <h1>{value}</h1>
        </div>
    )
}
export default ComponetB
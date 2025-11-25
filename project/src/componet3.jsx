import React,{useContext} from "react";

import { usernamecontext } from "./componetA";


function Componet3(){
    let value = useContext(usernamecontext)
    return (
        <div>
            <h3>
                {value}
            </h3>
        </div>
    )

}
export default Componet3
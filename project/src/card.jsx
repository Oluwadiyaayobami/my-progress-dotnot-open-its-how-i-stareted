import React from "react"
import pic from "./assets/bebe.jpg"
import "./index.css"

function cards (props){
        return(
        <div className="cards">
            <img src={pic} alt="" />
            <h2 className=" cards-title">{props.name}</h2>
            <p className="card-role">{props.job}</p>
        </div>
    )

}
export default cards



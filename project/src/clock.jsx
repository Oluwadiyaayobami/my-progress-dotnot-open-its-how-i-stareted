import React, {useState,useEffect} from "react";
function  Myclock() {
    const [time,settime]= useState(new Date())// stores the current state of time 

  useEffect(() => {
    const timeinterval = setInterval(() => {
        settime(new Date())
    },1000);// this make sure that for every seconds this code render 

    return () => clearInterval(timeinterval)// this clean up the previous interval of time 

  
},[])
  
      const hour = time.getHours();
      const min = time.getMinutes();
      const seconds = time.getSeconds();
      const merradian = hour >  12 ? 'pm' : 'am' 
    

    return(

    
    <div>
        <p>clock</p>
        <p>{hour}: {min} : {seconds} {merradian}</p>
    </div>
    )
}
export default Myclock


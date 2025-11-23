import React,{useState} from "react";
import  "./index.css"

function Todolist(){
    const [activity, setactivity] = useState([])

    const addnewquest = () => {
        let activityss = document.getElementById('task').value
        let errormessage = document.getElementById('error')
        if(activityss=== ''){
            errormessage.textContent = 'you can not add an empthy task '

        }
        else{
        errormessage.textContent = ''
        let now = Date.now()
        const newdate = new Date(now).toLocaleString();

        let newtask  = {date : newdate , activity :activityss, completed :false }
        setactivity([...activity,newtask])
        document.getElementById('task').value = ''
        }
    }

    const handlecomplication = (index) => {
        const updatedActivities = [...activity];
        updatedActivities[index].completed = true;
        setactivity(updatedActivities);
  
        

    };
    const deletetask = (index) => {
      setactivity((a) => a.filter((element,i) => i !== index ))
    } 
    // to delete something u pass the index of what u want to delete and get the index of it send the index to your function and filter note filter accept two variable eelemet and index so u take the i of the filter if its not eual to the index u leav it and the one equal to the index remove it 



    return (
        <div className="todobox">
            <h2 className="titleoftodo"> my to do list </h2>
            <input placeholder="activity " id="task" className="inputofactivity"/><br/>
            <button onClick={addnewquest} className="addactivity">add activity</button>
            <p id="error" className="errormessage"></p>

            <div>
                {activity.map((element,index) => (<li className="liofevent" key={index}><span>{element.date}</span> <span>{element.activity}</span> <span>{element.completed ? 'status: done' : '' }</span><span>{!element.completed &&(<button className="eventclicker" onClick={() => handlecomplication(index)}  id="button" key={index}>Are you done? </button>)}<span><button onClick={()=>deletetask(index)} className="deletbtn">Delete</button></span></span></li>)) }
            </div>

        </div>
    )

}
export default Todolist

// let now = Date.now()
// let newdate  = new Date (now).toLocaleString()
// console.log(newdate)

///////// or ///////
// let newdate  = new Date ().toLocaleString()
// console.log(newdate)
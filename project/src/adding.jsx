import React,{useState} from "react";

function Adding(){
    const [food ,setFood] = useState(['rice','beans','yam']);
    const addfood = ()=>{
        let newfood = document.getElementById('foodinput').value
        let message = document.getElementById('message')
        if(newfood === ''){
            console.log('cant accept an empty string ')
            message.textContent = 'cant add and empty'

        }
        else{
        message.textContent = ''
        setFood([...food,newfood])
        document.getElementById('foodinput').value = ''
        }
        
    }
    const deletefood = () => {
        setFood(food.slice(0,-1))

    }
    const remove = (index) => {
        setFood(food.filter((iteam,i) =>i !==  index))

    }

    return (
        <div>
            <p>list of food </p>
            <div>
                {food.map((element,index)=> (<li key={index}>{element} <button key={index} onClick={() =>remove(index)}>remove</button></li>))}
            </div>
            <input type="text"id="foodinput" />
            <button onClick={addfood}>add food</button>
            <p id="message"></p>
            <button onClick={deletefood}>remove the last food </button>
        </div>
    )

}
export default Adding
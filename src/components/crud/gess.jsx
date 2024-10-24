import { useState } from "react"



const GessGame=()=>{

    const [random,setRandom]=useState(Math.floor(Math.random() * 8) + 1)
    const [guess,setGuess]=useState('')
    const [feedback,setFeedback]=useState('')
    const [success,setSuccess]=useState('')

    const GuessHandler=()=>{
        const number=Number(guess)
        console.log(number,random,"value")
        
        if(isNaN(number) || number < 1 || number > 20){
            setFeedback("the value must be between 1 to 10")    
        }
        else if(number===random){
            setFeedback("you guess the correct one")
        }
        else{
            setFeedback("wrong guess please try again")
        }
        
    }

    const changeHandler=(event)=>{
        setGuess(event.target.value)
    }

    return(
        <>
        <h1>Gues the </h1>
        <input type="number"
        placeholder="Guess the number"
        value={guess}
        onChange={changeHandler}
        min="1"
        max="10"
        name="" id="" />
        <button onClick={GuessHandler}>Guess</button>
        {
            random ?  <p style={{color:"red"}}>{feedback}</p>:
            <p style={{color:"green"}}>{success}</p>
        }
       
        </>
    )
}
export default GessGame
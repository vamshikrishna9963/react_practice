import { useState } from "react"
import { json } from "react-router-dom"



export const Formdetails=()=>{

    const [username,setusername]=useState("")
    const [errors,seterror]=useState("")
    
    const changeHandler=(event)=>{
        const NameEnter=event.target.value
        console.log(NameEnter)
        setusername(NameEnter)
        const error=validation(NameEnter)
        console.log(error)
        if(error){
            seterror(error)
        }
        else{
            seterror("")
        }

    }

    const validation=(value)=>{
        let error=""
        let names=localStorage.getItem("name")
        if(!value){
            error="please enter your name"
        }
        if(!value===names){
          error="please enter value"
        }

        // const passValidation=(value)=>{
        //   let error=""
        //   let pass=/^[6-9][0-9][9]$/g
        // }
       return error
    }

    return(

        <form action="https://dummyjson.com/docs/users" onSubmit={onsubmit}>

        <div className="container">
    <h2>user Verification</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your Full name"
          name="username"
          value={username}
          onChange={changeHandler}
          
        />
             {
                errors && <span>{errors}</span>
             }
   
      </div>
      <label htmlFor="mobile">Mobile Number:</label>

      <input
          type="text"
          className="form-control"
          id="mobile"
          placeholder="Enter your Full name"
          name="mobile"
        
        />
      </div>


      
      <button type="submit" className="btn btn-primary">
    Submit
  </button>
      </form>
    )
}
import { useState } from "react"
import "./form.css"
import CrudExamples from "../crud/crud"



const FormCrud=()=>{

    const [username,setUsername]=useState('')
    const [useError,setUseError]=useState("")
    const [timeDate,setTimedate]=useState('')
    const [timeError,setTimeError]=useState("")
    const [work,setWork]=useState('')
    const [todo,setTodo]=useState([])
    const [workerror,setworkerror]=useState('')
    const userHandler=(event)=>{
        const userEnter=event.target.value
        setUsername(userEnter)
        console.log(userEnter)
        const error=userValidation(userEnter)
        if(error){
            setUseError(error)
        }
        else{
            setUseError("")
        }
    }

    const userValidation=(value)=>{
        let error=""
        if(!value){
            error="please enter your name"
        }
        else if(value.length >15  || value.length < 6 ){
            error="name must be greater then 6 and less then 15 characters"
        }
        return error
    }

    const timeDateHandler=(event)=>{
        const timeEnter=event.target.value
        setTimedate(timeEnter)
        console.log(timeEnter)
        const error=timeValidation(timeEnter)
        console.log(error);
        
        if(error){
            setTimeError(error)
        }
        else{
            setTimeError("")
        }
    }

    const timeValidation=(value)=>{
        let error=""
        const number=Number(value)
        if(!value){
            error="please enter date"
        }
        else if(number){
            error="please enter number"
        }
       
        return error

    }

    const workHandler=(e)=>{
        const workEnter=e.target.value
        setWork(workEnter)
        const Error=workValidation(workEnter)
        if(Error){
            setworkerror(Error)
        }
        else{
            setworkerror("")
        }

    
    }

    const workValidation=(value)=>{
        let error=""
        if(!value){
            error="please add your todo list"
        }
        else if(value.length < 8){
            error="Your work must be more then 8 characters"
        }
       
        return error
    }
    const submitForm=(event)=>{
        event.preventDefault()
        if(useError || timeError || workerror ){
            alert("please fill the details")
        }else{
            username ? setTodo([...todo,username,timeDate,work]):""
            setUsername("")
            setTimedate("")
            setWork("")

        }
    }

    const apHand=()=>{
        <CrudExamples/>
    }

    return(
        <>
        <div className="form_main" >
            
            <h1>form Details</h1>
            <div className="form_div">
            
            <form onSubmit={submitForm} action="https://www.youtube.com/">
               <label htmlFor="name"> Username:</label><br />
               <input type="text" name="" id="name" value={username} onChange={userHandler}/> <br />
               {
                useError && <h6>{useError}</h6>
               }
               <label htmlFor="name">Time and Date  :</label><br />
               <input type="date" name="" id="name" value={timeDate}  onChange={timeDateHandler} /><br />
               {
               timeError && <h6>{timeError}</h6>
               }
               <label htmlFor="name">Todo List :</label><br />
               <input type="text" name="" id="name" value={work} onChange={workHandler}/> <br />
               {
                workerror && <h6>{workerror}</h6>
               }
               <label htmlFor="">Submit your form</label><br />
               <input type="submit" />
            </form>


            </div>
            
        </div>
        <h1>well come to user details</h1>
        {
            todo?.map(each=><>
            <h1>{each}</h1>
            <button>Delete</button>
            <button>update</button>
            </>)
        }
        </>
    )
}
export default FormCrud
import { useEffect, useState } from "react"



const LocalStorage=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [nameError,setNameError]=useState("")
    const [pass,setPassError]=useState("")
    const[local,setLocal]=useState("")
    const [online,setOnline]=useState(navigator.onLine)

    const clickHandler=()=>{
        setOnline(navigator.onLine)
    }
    useEffect(()=>{
       
        window.addEventListener('online',clickHandler)
        window.addEventListener('offline',clickHandler)
        
    },[online])
    console.log(local)
    const nameHandler=(event)=>{
        const nameEnter=event.target.value
        console.log(nameEnter)
        setName(nameEnter)
        const error=nameValidation(nameEnter)
        console.log(error)
        if(error){
            setNameError(error)
        }
        else{
            setNameError("")
        }
    }

    const nameValidation=(value)=>{

        let error=""
        // let na=local
        let cha=/^vamshi/i
        if(!value){
            error=("please Enter your name")
        }
        else if(!cha.test(value)){
            error=("name should match")
        }
        else if(!value == localStorage.getItem("name")){
            error=("name didnt match")
        }
        return error

    }
    const passwordHandler=(event)=>{
        const passEnter=event.target.value
        console.log(passEnter)
        setPassword(passEnter)
        const error=passValidation(passEnter)
        console.log(error)
        if(error){
            setPassError(error)
        }
        else{
            setPassError("")
        }
    }

    const passValidation=(va)=>{
        let error=""
        let reg=/^[A-Z6-9][0-9]{5}$/
        if(!va){
            error="please Enter password"
        }
        else if(!reg.test(va)){
            error="please enter valid password"
        }
        return error
    }

    return(
        <>
        {
            online ? <h1>online</h1> :<h1>Offline</h1>
        }
        <h1>hello.....</h1>
       <form action="">
        <label htmlFor="name">username:</label>
       <input type="text" name="" id="name" value={name} onChange={nameHandler}/><br />
       {
        nameError && <h6 style={{color:"red"}}>{nameError}</h6> 
       }
       <label htmlFor="password">password:</label>
       
       <input type="password" name="" id="password" value={password} onChange={passwordHandler}/>
       {
        pass && <h6 style={{color:"red"}}>{pass}</h6> 
       }
       <input type="button" value="submit" />
       </form>
        </>
    )
}
export default LocalStorage
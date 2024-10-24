// import { With_count } from "./hoc"
import React, { useContext } from "react"
import { useRef } from "react"
import  {Withcounter}  from "./hoc"
import { Global2 } from "./allpage"


// import { With_count } from "./hoc"


 const Homepage=({profile})=>{
    console.log(profile.firstName)
    const { currentState,dispatch}=useContext(Global2)

    
    return(
    <>
        <h2>age {currentState.age}</h2>
        <h1>well come to {profile.firstName} </h1>
        <h2>higher order component is the fuction that takes the components as the argument and return the inheritence of component</h2>
       
       
    </>        
    )
}
export default React.memo(Withcounter(Homepage))

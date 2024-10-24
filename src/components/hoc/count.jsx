import { useContext, useReducer, useState } from "react"
import  {Withcounter}  from "./hoc"
import { Global, Global2 } from "./allpage"
import { Decreament, Increament, initializations } from "../routers/jshelper"
import React from "react"


 const Counter=({profile})=>{
    const [change,setChange]=useState(["vamshi"])
    const [edit,setEdit]=useState([])
    console.log(profile.firstName)
    const { currentState,dispatch}=useContext(Global2)
    const {name}=useContext(Global)
    const changeHandler=()=>{
        console.log("increament.............")
        dispatch(Increament)
    }
    const decHandler=()=>{
        console.log("Decreament.............")
        dispatch(Decreament)
        // console.log("hello")

    }

    const addCardHandler=()=>{
        // setChange(change)
        // console.log(change)
        setEdit(change,[...edit])
    }

    return(
        <>
        <h2>this is the {currentState.age}</h2>
        <button onClick={changeHandler}>click</button>
        <button onClick={decHandler}>decrease</button>
        <h2>he is the {name}</h2>
        
        this is for counter
        <h2>hi my name is {profile.firstName}</h2>

        <button onClick={addCardHandler}>add card</button>
        <h2>{change}</h2>
        {
            edit.map(each=><><h2>{each}</h2></>)
        }
        <h2>{edit}</h2>
        {/* {

            change.map(each=><>
            <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">hi</h5>
   <h1>{each}</h1>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
            </> )
        
        
 } */}

    
        </>
    )
}
export default React.memo(Withcounter(Counter))
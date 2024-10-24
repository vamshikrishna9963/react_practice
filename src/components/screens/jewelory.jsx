import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Globalchanges } from "../routers/navStack"








export const Jewelory=()=>{

    const {username}=useContext(Globalchanges)
    console.log(username)
    return(
     <>
        <h1>well come to Jewelory</h1>
        <h3>hi {username}</h3>
     </>
    )
}
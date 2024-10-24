import { useContext } from "react"
import { NavLink, Outlet, Route, useParams } from "react-router-dom"
import { Globalchanges } from "../routers/navStack"









export const CategoryScreen=()=>{

    const {username}=useContext(Globalchanges)

    return(
        
        <>
        <h1>hello {username}</h1>
        <h1>well come to CategoryScreen</h1>
        <NavLink to={"jewelory"}>jewelory</NavLink>
        <NavLink to={"menwears"}> mens wear</NavLink>
        <Outlet/>
        </>
    )
}
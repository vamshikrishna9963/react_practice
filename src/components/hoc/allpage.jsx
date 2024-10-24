import { Route, Router, Routes } from "react-router-dom"
import  {Withcounter}  from "./hoc"
import Homepage from "./hoc2"
import Counter from "./count"
import { Navbar } from "react-bootstrap"
import { Navbarss } from "./navbar"
import { createContext, useReducer, useState } from "react"
import { Dispaches, initializations, ReducerFunction } from "../routers/jshelper"
import  Products_details  from "./products"

export const Global=createContext()
export const Global2=createContext()


export const Mainpage=()=>{
    const [name,setname]=useState("vamshi")

   

    const [currentState,dispatch]=useReducer(ReducerFunction,initializations)

    const changeHandler=()=>{
        // setname(age+1)
        dispatch(Dispaches)
    }
    return(
        <Global2.Provider value={{
            currentState,
            dispatch
        }}>
        <Global.Provider value={{
            name,
            changeHandler
        }}>
            
        <Navbarss/>
        {/* <h1>main page</h1> */}
       <Routes>
        <Route path="counter" element={<Counter/>} />
        <Route path="" element={<Homepage/>} />
        <Route path="products" element={<Products_details/>} />

        {/* <Route path="count" element={</>}/> */}
       </Routes>
        </Global.Provider>
        </Global2.Provider>

    )
}
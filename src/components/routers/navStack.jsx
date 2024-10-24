import { Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/homeScreen"
import { AboutScreen } from "../screens/aboutScreen"
import { CategoryScreen } from "../screens/category"
import { Products } from "../screens/products"
import { NavBar } from "./navbar"
import { Jewelory } from "../screens/jewelory"
import { Mens } from "../screens/mens"
import { DetailsScreen } from "../screens/details"
import { createContext, useReducer, useState } from "react"
import {  Increament, initializations, ReducerFunction } from "./jshelper"


export const Globalchanges=createContext()

export const UseReducers=createContext()

export const NavStack=()=>{

    const [username,setusername]=useState("vamshi")

    // setusername(username)

    const [currentState,dispatch]=useReducer(ReducerFunction,initializations)

    const change=()=>{

        dispatch(Increament)

    }
    


    return(
        <UseReducers.Provider value={{
            currentState,
            dispatch
        }}>
        <Globalchanges.Provider value={{
            username
        }}>
        <NavBar/>
        <h1>main page</h1>
        <h2>age is - {currentState.age}</h2>
        <button onClick={change}>click</button>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="about" element={<AboutScreen/>}/>
            <Route path="category" element={<CategoryScreen/>}>
            <Route index path="jewelory" element={<Jewelory/>}/>
            <Route path="jewelory" element={<Jewelory/>}/>
            <Route path="menwears" element={<Mens/>}/>

            </Route>
            <Route path="products" element={<Products/>}/>
            <Route path="products/:productId" element={<DetailsScreen/>}/>


        </Routes>
        </Globalchanges.Provider>
        </UseReducers.Provider>

    )
}
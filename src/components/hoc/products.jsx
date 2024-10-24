import axios from "axios"
import { Fragment, useContext, useEffect, useState } from "react"
import { Global2 } from "./allpage"

import React from "react"


 const Products_details=()=>{

    const [data,setdata]=useState([])
    useEffect(()=>{
        fechdata()
    },[])

    const {currentState,dispatch} =useContext(Global2)
    const fechdata=async()=>{
        const {data,status}=await axios.get("https://fakestoreapi.com/products")
        console.log(data)
        if(status===200){
            setdata(data)
        }
    }
    return(
     <>
        <h3>data</h3>
        {
                data.map(each=><Fragment key={each.id}>
                <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{each.title}</h5>
    <p className="card-text">
     {each.description}
    </p>
    <h2>{currentState.age}</h2>
    <h3>price /-Rs {each.price}</h3>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

                </Fragment>
                
            )
        }
     </>
    )
}
export default React.memo(Products_details)
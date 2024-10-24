import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"





export const DetailsScreen=()=>{

    const eachone=useParams()
    const [data,setdata]=useState({})



    useEffect(()=>{
        fechdata()
    },[eachone])

    const fechdata=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${eachone.productId}`)
        if(response.status==200){
            setdata(response.data)
        }
    }

    return(
    <>
        <h1>well come to DetailsScreen</h1>
    {
        Object.keys(data).length>0 && <>
        <h1>{data.title}</h1>
        <h2>{data.descriptions}</h2>
        </>
    }
    </>        
    )
}
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"







export const Products=()=>{
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        console.log(response)
        if(response.status===200){
            setdata(response.data)
        }
    }

    return(
        <>
        <h1>well come to Products</h1>
        {/* {
            data.length>0 && <> */}
            
            {


    data.map(each=><>
        <h1>{each.title}</h1>
        <button ><Link to={`${each.id}`}>view more</Link></button>
    
    </>
    )

}
            
            
            </>
    //     }
    //    </>
    )
}
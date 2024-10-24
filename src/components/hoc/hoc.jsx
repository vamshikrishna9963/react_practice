import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"

export const Withcounter=(Component)=>{
    return()=>{

        const [data,setdata]=useState(0)
        const [name,setname]=useState({})

        useEffect(()=>{
            fechdata()
        },[])

        const fechdata=async()=>{
                const {data,status}=await axios.get('https://dummyjson.com/users/15')
                if(status===200){
                    setname(data)

                }
        }
       

        return <Component profile={name}/>
    }
}

// export default React.memo (Withcounter)
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Global } from "../navdetails/navstack"


const AboutScreen=()=>{
    const [number,setNumber]=useState([])
    // const [search,setSearch]=useState('')

    const {search,changofHand}=useContext(Global)

    useEffect(()=>{
        const fechData=async()=>{
            const {data,status}=await axios.get('https://dummyjson.com/recipes')
            
            console.log(data)


            if(status===200){
                setNumber(data.recipes)
            
                console.log(data.recipes)
            }


        }
        fechData()
    },[])
    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }
    // const handelers=(type)=>{
    //     switch(type){
    //         case "ONEHANDLER":
    //     const num1=number.filter((id)=>id >3 && id < 10 )
    //             setNumber(num1)
    //             break;
    //         case "TWOHANDLER":
    //             const num2=number.filter((id)=>id >9)
    //             setNumber(num2)
    //     }
    //     // return number
    // }

    const oneHandler=(ind)=>{
        const num1=number.filter((_,index)=>index >3 && index < 10 )
        setNumber(num1)
    }
    const twoHandler=()=>{
        const num2=number.filter((item)=>item >9)
        setNumber(num2)
    }

    const allHand=()=>{
        setNumber(number)
    }
    const fillchange=()=>{
      
    }
    
    return(
        <>
        <h1>well come to about screen</h1>
       <input type="text" name="" id="" value={search} onChange={searchHandler}/>


        <button onClick={oneHandler}>1-9</button>
        <button onClick={twoHandler}> 10-30</button>
        {/* <button onClick={allHand}>All</button> */}
        
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
        
       {
       number.length>0 ?  number.filter(each=>each.name.toLowerCase().includes(search.toLowerCase())).map((each,index,fillchange)=><>

    <tr key={each.id}>
      <th scope="row">{each.id}</th>
      <td>{each.name}</td>
      <td>{each.cookTimeMinutes}</td>
      <td>@mdo</td>
    </tr>
    
   
 
   

      
        </>):<h1>no recipe found</h1>
       }
       
       </tbody>
</table>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarTogglerDemo03"
    aria-controls="navbarTogglerDemo03"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
      
    </ul>
    {/* <form className="form-inline my-2 my-lg-0"> */}
      <input
        className="form-control mr-sm-2 w-25"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search} onChange={changofHand}

      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    {/* </form> */}
    {/* <button>he</button> */}
  </div>
</nav>

        </>
    )
}
export default AboutScreen

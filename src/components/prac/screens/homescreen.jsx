import { useState } from "react"


const HomeScreen=()=>{

    const [todo,setTodo]=useState([])
    const [inputs,setInputs]=useState('')

    const changeHandler=(event)=>{

        setInputs(event.target.value)

    }

    const submitHand=(e)=>{
        e.preventDefault()
    }

    const addTodo=()=>{
        
        inputs.length >0 ? setTodo([...todo,inputs]) :"please fill"
        setInputs("")
    }

    const deleteHand=(ind)=>{

        const deletes=todo.filter((_,index)=>index !=ind)
            setTodo(deletes)


    }

    const updateHand=(ind)=>{
        setInputs(ind)
        const val=todo[ind]
        setInputs(val)
    }
    return(
        <>
        <h1>well come to Home screen</h1>
        
        <form onSubmit={submitHand}>
        <input type="text" name="" id="" value={inputs} onChange={changeHandler}/>
        <button onClick={addTodo}>add todo</button>
        </form>

        {
            todo.map((each,index)=><>
            <ul>
                <li>{each}</li>
                <button onClick={()=>deleteHand(index)}>Delete</button>
                <button onClick={()=>updateHand(index)}>update</button>
            </ul>
            </>)
        }
       
        </>
    )
}
export default HomeScreen
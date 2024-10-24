import { useState } from "react"
import { Button } from "react-bootstrap"




const CrudExamples=()=>{
    const[todo,setTodo]=useState([])
    const[input,setInput]=useState('')
    const[selectedItem,setSelectedItem]=useState(null)
    const inputHandler=(event)=>{
        setInput(event.target.value)

    }

    const todoHandler=(e)=>{
        e.preventDefault()
        input ? setTodo([...todo,input]) :""
        setInput("")
    }

    const deleteHandler=(ind)=>{
        const deleted=todo.filter((_,index)=>index !=ind)
        setTodo(deleted)
    }

    const updateTodo=(e)=>{
        e.preventDefault()
        const todocopy=[...todo]
        todocopy[selectedItem]=input
        setTodo(todocopy)
        setSelectedItem(null)
        setInput("")
    }

    const updateHandler=(ind)=>{
        setSelectedItem(ind)
        const val=todo[ind]
        setInput(val)
    }
    return(
        <div >
        <h1>Todo list</h1>
        <hr />
        <form onSubmit={selectedItem ? updateTodo:todoHandler}>
            <input type="text" value={input} onChange={inputHandler}/>
            <button type="submit"> {
                selectedItem || selectedItem == 0 ? "Update todo" :"Add Todo"
                } </button>
        </form>
        
        {
            todo?.map((each,index)=><>
            <div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
    <h5 className="card-title">todo list</h5>
    <p className="card-text">
{each}

    </p>
    <button onClick={()=>deleteHandler(index)}>Delete</button>
    <button onClick={()=>updateHandler(index)}>Update</button>
  </div>
</div>

            
            </>)
        }
        </div>
    )
}
export default CrudExamples
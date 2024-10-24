import { NavLink } from "react-router-dom"
import "./style.css"



export const NavBar=()=>{
    return(
        <ul className="nav justify-content-center">
  <li className="nav-item">
   <NavLink to={""}>Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to={"about"}>About</NavLink>
  </li>
  <li className="nav-item">
  <NavLink to={"category"}>category</NavLink>

  </li>
  <li className="nav-item">
  <NavLink to={"products"}>products</NavLink>

      Disabled
    
  </li>
</ul>

    )
}
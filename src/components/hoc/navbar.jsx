import { NavLink } from "react-router-dom"

export const Navbarss=()=>{
    return(
        <ul className="nav justify-content-center">
        <li className="nav-item">
         <NavLink to={""}>Home</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"counter"}>counter</NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"products"}>products</NavLink>
        </li>
      </ul>
    )
}

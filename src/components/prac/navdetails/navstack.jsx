import { Routes , Route } from "react-router-dom"
import HomeScreen from "../screens/homescreen"
import AboutScreen from "../screens/about"
import { createContext ,useState} from "react"

export const Global=createContext()

const NavStacks=()=>{
    const [search,setSearch]=useState('')

    const changofHand=(e)=>{
        setSearch(e.target.value)
    }
    return(
        <Global.Provider value={{
            search,
            changofHand
        }}>
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="about" element={<AboutScreen/>}/>
        </Routes>
        </Global.Provider>
    )
}
export default NavStacks
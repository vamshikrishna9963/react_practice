import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { NavStack } from './components/routers/navStack.jsx';
import { Formdetails } from './components/fomrs/uncontrol.jsx';
import Homepage from './components/hoc/hoc2.jsx';
import { Mainpage } from './components/hoc/allpage.jsx';
import LocalStorage from './components/localstorage/local.jsx';
import CrudExamples from './components/crud/crud.jsx';
import { Lists } from './components/crud/list.jsx';
import GessGame from './components/crud/gess.jsx';
import FormCrud from './components/form/formCrud.jsx';
import NavStacks from './components/prac/navdetails/navstack.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <FormCrud/> */}
    {/* <GessGame/> */}
    <BrowserRouter>
    <NavStacks/>
    {/* <NavStack/> */}
    </BrowserRouter>
    {/* <Formdetails/> */}
{/* <CrudExamples/> */}
{/* <Lists/> */}
   {/* <LocalStorage/> */}
  </StrictMode>,
)

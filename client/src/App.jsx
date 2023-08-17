import { UserApplication } from "./Components/UserSide/UserApplication/UserApplication"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {  AuthContextProvider} from "./Context/AuthContext"
import { Register } from "./Components/Register/Register"
import { Signin } from "../src/Components/Signin/Signin"
import { Application } from "./Components/Application/Application"
import { RoutePrivate } from "./Routes/RoutePrivate"
import { ResetPassword } from "./Components/ResetPassword/ResetPassword"
import { Login } from "./Components/Login"

import Logo from "../public/logoName.svg"
import "./global.css"

function App() {

  
  return (
    
    <BrowserRouter>

    <div className="exclusive">
        <div className="exclusiveContent">
            <h1>Plataforma exclusiva para Desktop!!</h1>
            <img className="exclusiveLogo" src={Logo} alt="logo" />
        </div>
    </div>
    
      <AuthContextProvider>
        <Routes>

          <Route exact path="/" element={<Login />} />
          {/* <Route path="/tabela" element={<Application/>} /> */}


          <Route   

            path="/tabela-adm"
            element={
                
              <RoutePrivate>
                <Application/>
              </RoutePrivate>
              
            }
          />
          <Route   

            path="/tabela-usuario"
            element={
                
              <RoutePrivate>
                <UserApplication/>
              </RoutePrivate>
              
            }
          />
          <Route   

            path="/tabela-registro"
            element={
                
              <Register/>
              
            }
          />
          <Route   

            path="/tabela-login"
            element={
                
              <Signin/>
              
            }
          />
          <Route   

            path="/recuperar-senha"
            element={
                
              <ResetPassword/>
              
            }
          />
          
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
    
    )
  }
                
  export default App 

  
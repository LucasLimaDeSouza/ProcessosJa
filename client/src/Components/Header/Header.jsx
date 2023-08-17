import { Header } from "./style";
import { Link } from "react-router-dom";
import LogoName from "../../../public/logoName.svg";
import Logo from "../../../public/logo.svg";
import React, { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../Service/firebase";



export function HeaderArea() {

    const { user, setUser } =  useContext(AuthContext)
    // const { user } = useAuthState
    
    const exitUser = () => {

        setUser({

            id: null,
            avatar: null,
            name: null,

        })

        auth.signOut();
    }

    return (


                
        <Header>
            <img src={LogoName} alt="Logo" />

            <div className="userCamp">
                <img className="avatarUser" src={user.avatar? user.avatar : Logo} />
                <p className="userName">{user.name ? user.name : user.email}</p>
            </div>

            <nav className="exit">
                <Link 
                    to="/"
                    style={{
                        color: "red",
                        fontSize: "large" 
                    }}

                    onClick={exitUser}
                >
                    Sair
          
                </Link>
                <Link 
                    to="https://exosolucoes.com/"
                    style={{
                        color: "black",
                        fontSize: "large" 
                    }}
                >
                    Início
                
                </Link>
            </nav>
        </Header>

    )
}
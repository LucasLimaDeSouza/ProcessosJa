import Logo from "../../../public/logo.svg";
import { BoxLogin } from "./style";
import {firebase, auth} from "../../Service/firebase"
import { GoogleLogo } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate(); //REDIRECIONA PARA COMPONENTES 
    const {user, setUser} = useContext(AuthContext)
    console.log(user);

    useEffect(() => {

        auth.onAuthStateChanged((user) => {

            if (user) {
                
                const {uid, displayName, photoURL, email} = user;
                if (!displayName) throw new Error("O usuario não tem nome")
                if (!photoURL) throw new Error("O usuario não tem foto")
    
                setUser({

                    id: uid,
                    avatar: photoURL,
                    name: displayName,
                    email: email,
                })

                if(user.email === import.meta.env.VITE_USER_EMAIL) {

                    navigate("/tabela-adm")
    
                } else {

                    navigate("/tabela-usuario");
                }
            }

        })

        

    }, [])
    
    const handleClickButtonLogin = async () => {

        const provider = new firebase.auth.GoogleAuthProvider()

        const result = await auth.signInWithPopup(provider)

        if (result.user) {
            console.log(result.user);

            if(result.user.email === import.meta.env.VITE_USER_EMAIL){

                navigate("/tabela-adm")


            } else {

                const {uid, displayName, photoURL, email} = result.user;
                
                setUser({
                    id: uid,
                    avatar: photoURL,
                    name: displayName,
                    email: email
                })
                
                if (!displayName) throw new Error("O usuario não tem nome")
                if (!photoURL) throw new Error("O usuario não tem foto")
                navigate("/tabela-usuario");
            }

        }
    }

    const handleClickButtonRegisterUser = async () => {
        navigate("/tabela-registro")
    }
    const handleClickButtonLoginUser = async () => {
        navigate("/tabela-login")
    }
    
    return (
       
        <BoxLogin>

            <img className="photo" src={Logo}/> 

            <h1>Acesse sua conta</h1>

            <span>
                A <em>eXo Soluções </em> utiliza autenticação social, pois a autenticação com a Google<br />
                facilita a vida do usuário permitindo utilizar a aplicação sem fazer cadastrado.
            </span>

            <b>
                Para um melhor atendimento diga o nome ou email de usuário e número de processo
                <br/>
                que se encontram na plataforma.
            </b>

            <div className="boxButton">
                <button type="button" onClick={handleClickButtonLogin} className="button">
                    <GoogleLogo />
                    Faça Login Com Google
                </button>
                    <b>- ou -</b>
                <button type="button" onClick={handleClickButtonRegisterUser} className="button">
                    Cadastrar
                </button>      
                <button type="button" onClick={handleClickButtonLoginUser} className="button">
                    Login
                </button>
                      
            </div>

            
        </BoxLogin>
 
    )
}
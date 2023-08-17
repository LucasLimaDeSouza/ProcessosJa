import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./style";
import Logo from "../../../public/logo.svg";
import { auth } from "../../Service/firebase";
import { AuthContext } from "../../Context/AuthContext";
import { Toaster, toast } from "react-hot-toast";

export function Signin(props) {
  const navigate = useNavigate();
  const [toastStatus] = useState(props.toastStatus);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  // const userEmail = user.email
  // const userPassword = user.password
  // const userName = user.name

  const backToLogin = () => {
    navigate("/");
  };

  const handleLogin = () => {

    
    if (email === "" || password === "") {
      toast('Preencha Todos os Campos Corretamente', {
        style: {
          borderRadius: '10px',
          background: '#d32f2f',
          color: '#fff',
        }
      });
    } else {
      auth.fetchSignInMethodsForEmail(email)
        .then((signInMethods) => {
          if (!signInMethods || signInMethods.length === 0) {
            // O e-mail não está associado a uma conta existente
            toast('Usuário não Existe', {
              style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#d32f2f',
              }
            });
          } else {
            auth.signInWithEmailAndPassword(email, password)
              .then(() => {
                const currentUser = auth.currentUser;
                
                if (currentUser) {
                  const { uid, displayName, email } = currentUser;
                  setUser({
                    id: uid,
                    name: displayName ? displayName : email,
                    email: email,
                  });
                  console.log("foi? foi!");
                  navigate("/tabela-usuario");
                } else {
                  // Caso o usuário seja nulo (login inválido)
                  toast('Email ou Senha Incorreto', {
                    style: {
                      borderRadius: '10px',
                      background: '#fff',
                      color: '#d32f2f',
                    }
                  });
                }
              })
              .catch(error => {
                // Tratar erros de login aqui
                console.error("Erro ao fazer login:", error.message);
                toast('Erro ao fazer login', {
                  style: {
                    borderRadius: '10px',
                    background: '#d32f2f',
                    color: '#fff',
                  }
                });
              });
          }
        });
    }
  }
    
      // Aqui você pode redirecionar o usuário para a página que desejar após o login bem-sucedido.
      // Por exemplo, redirecioná-lo para a página do usuário autenticado.
      
      //   if (currentUser) {
      //     // Aqui você pode acessar as informações do usuário
      //     console.log(currentUser);
      //   } else {

      //     toast('Email ou Senha Incorreto', {
      //       style: {
      //         borderRadius: '10px',
      //         background: '#fff',
      //         color: '#d32f2f',
      //       }
      //     });
      //   }
        
  

  useEffect(() => {

    if(toastStatus === true) {

      toast('Usuário Cadastrado', {
          style: {
            borderRadius: '10px',
            background: '#12963a',
            color: '#fff',
          },
        });
  }
  },[])

  const resetPassword = () => {
    navigate("/recuperar-senha")
  }

  return (
    <>
      <LoginContainer>
        <div className="boxName">
          <img src={Logo} alt="logo" />
          <h1>Entrar</h1>
        </div>
        <div className="content">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Login"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword?"text":"password"}
            placeholder="Senha"
            value={password}
          />
          <a onClick={() => setShowPassword(!showPassword)}>{showPassword ? "esconder" : "mostrar"} senha</a>

          <div className="boxButton">
            <button onClick={handleLogin}>Entrar</button>
            <button onClick={backToLogin}>Voltar</button>
          </div>
          <div className="resetBox">
            <a onClick={resetPassword}>Esqueci a Senha</a>
          </div>
        </div>

        <Toaster
            position="bottom-left"
            reverseOrder={false}
        />
      </LoginContainer>
    </>
  );
}

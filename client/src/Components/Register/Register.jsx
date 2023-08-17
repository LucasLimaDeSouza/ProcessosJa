import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContainer } from "./style";
import Logo from "../../../public/logo.svg";
import { auth } from "../../Service/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Toaster, toast  } from 'react-hot-toast';
import { AuthContext } from "../../Context/AuthContext";
// import { Login } from "../Login";
import { Signin } from "../Signin/Signin";

// import { createUserWithEmailAndPassword } from "firebase/auth";

export function Register() {

  const navigate = useNavigate();
  const [toastStatus, setToastStatus] = useState(false);
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { user, setUser } = useContext(AuthContext)


  console.log(user);

  const backToLogin = () => {
    navigate("/");
  };

  const [ loading, error ] =
    useCreateUserWithEmailAndPassword(auth);
    
    const handleRegister = () => {
      // Verificar se os campos de e-mail e senha estão preenchidos
      if (email === "" || password === "") {
        toast('Preencha Todos os Campos Corretamente', {
          style: {
            borderRadius: '10px',
            background: '#d32f2f',
            color: '#fff',
          }
        });
        return;
      }
    
      // Verificar se o e-mail já está associado a uma conta existente
      auth.fetchSignInMethodsForEmail(email)
        .then((signInMethods) => {
          if (signInMethods.length > 0) {
            // O e-mail já está associado a uma conta existente
            toast('Usuário Já Existe', {
              style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#d32f2f',
              }
            });
            return;
          }
    
          // Criar o usuário
          auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              // Você também pode atualizar o nome do usuário aqui, se necessário.
              // Por exemplo: user.updateProfile({ displayName: name });
    
              setUser({
                // name: name,
                email: email,
              });
    
              navigate("/tabela-login"); // Redirecionar para a página desejada após o cadastro bem-sucedido
              setToastStatus(prevToast => prevToast = !toastStatus);
            })
            .catch((error) => {
              // Tratar erros aqui
              console.error("Erro ao cadastrar usuário:", error.message);
              toast('Erro ao cadastrar usuário', {
                style: {
                  borderRadius: '10px',
                  background: '#d32f2f',
                  color: '#fff',
                }
              });
            });
        })
        .catch((error) => {
          // Tratar erros aqui
          console.error("Erro ao verificar e-mail:", error.message);
        });
    };

  // if (loading) {
  //   return <p>Carregando...</p>;
  // }

  return (
    <>
      <RegisterContainer>
        <div className="boxName">
          <img src={Logo} alt="logo" />
          <h1>Cadastre-se</h1>
        </div>
        <div className="content">
          {/* <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome de Usuario"
          /> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Login"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "password" : "text"}
            placeholder="Senha"
            value={password}
          />
          <a onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Mostrar" : "Esconder"} senha
          </a>
          <div className="boxButton">
            <button onClick={handleRegister}>Cadastrar</button>
            <button onClick={backToLogin}>Voltar</button>
          </div>
        </div>

        <Toaster
            position="bottom-left"
            reverseOrder={false}
        />

      </RegisterContainer>
      <Signin
        toastStatus={toastStatus}
      />

    </>
  );
}

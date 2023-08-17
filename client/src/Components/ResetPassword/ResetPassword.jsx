import { useState } from "react";
import { auth } from "../../Service/firebase";
import { ResetContainer } from "./style";
import { useNavigate } from "react-router-dom";

import Logo from "../../../public/logo.svg";

export function ResetPassword() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [resetSent, setResetSent] = useState(false);

    const handleReset = async () => {
    auth.sendPasswordResetEmail(email)
        .then(() => {
        setResetSent(true);
        })
        .catch((error) => {
        console.error("Erro ao enviar e-mail de recuperação:", error.message);
        });
    };

    return (
    <ResetContainer>
        <div className="resetBox">
            <img className="logoReset" src={Logo} alt="Logotipo" />
            <h2>Recuperação de Senha</h2>
            <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="buttonBox">
                <button onClick={handleReset}>Enviar E-mail de Recuperação</button>
                <button onClick={() => navigate("/")}>Voltar</button>
            </div>

            {resetSent && <b className="alertSuccess">E-mail de recuperação enviado com sucesso!</b>}
        </div>
    </ResetContainer>
    );
}


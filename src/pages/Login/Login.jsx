import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

// Assets
import logoBw from "../../assets/Login/logo_gobeeco_bw.svg";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email.trim() && password.trim()) {
            // Validation passed
            navigate("/dashboard");
        } else {
            // Validation failed
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                {/* Logo */}
                <div className="login-logo-container">
                    <img src={logoBw} alt="GoBeEco" className="login-logo" />
                </div>

                <h1 className="login-title">Iniciar Sessão</h1>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Endereço de E-mail*</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="john.doe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Palavra-passe*</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="button" className="btn-submit" onClick={handleLogin}>
                        Iniciar Sessão
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

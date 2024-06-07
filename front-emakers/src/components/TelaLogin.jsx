import "./App.css";
import React from "react";
import { useHistory } from "react-router-dom";

function TelaLogin() {
  const history = useHistory();

  const handleRegisterClick = () => {
    history.push("/registro");
  };

  return (
    <div className="div-principal-tela-login">
      <img src="src/img/brancologo.png" alt="Logo Emakers" className="logo-emakers" draggable="false" />

      <div className="div-esquerda-tela-login">
        <h1 className="entre">Entre em Sua Conta</h1>
        <form action="" autoComplete="off" className="form-login">
          <fieldset>
            <label htmlFor="email" className="form-email">
              E-mail:
              <input type="email" name="email" />
            </label>
            <label htmlFor="password" className="form-password">
              Senha:
              <input type="password" name="password" />
            </label>

            <button type="submit" className="form-button-entrar">Entrar</button>
          </fieldset>
        </form>
      </div>

      <div className="div-direita-tela-login">
        <h1>Novo Aqui?</h1>
        <p>Registre-se e venha<br /> fazer parte da<br /> maior rede social!</p>
        <button className="form-button-registrar" onClick={handleRegisterClick}>Registrar-se</button>
      </div>
    </div>
  );
}

export default TelaLogin;

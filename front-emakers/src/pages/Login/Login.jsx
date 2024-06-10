import "./Login.css";
import React from "react";

function TelaLogin() {
  return (
    
    <div class="div-principal-tela-login">
    <img src="src/img/brancologo.png" alt="Logo Emakers" class="logo-emakers" draggable="false"/>

      <div class="div-esquerda-tela-login">
        <h1 class="entre">Entre em Sua Conta</h1>
        <form action="" autocomplete="off" class="form-login">
          <fieldset>
            <label for="email" class="form-email">
              E-mail:
              <input type="email" name="email" />
              </label>
            <label for="password" class="form-password">
              Senha:
              <input type="password" name="password" />
            </label>

            <button type="submit" class="form-button-entrar">Entrar</button>
          </fieldset>
        </form>
      </div>

      <div class="div-direita-tela-login">
        <h1>Novo Aqui?</h1>
        <p>Registre-se e venha<br/> fazer parte da<br/> maior rede social!</p>
        <button class="form-button-registrar">Registrar-se</button>
      </div>
      
    </div>
  );
}

export default Login;

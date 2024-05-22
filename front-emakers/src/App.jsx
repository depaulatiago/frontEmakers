import { useState } from 'react'
import "./App.css"
import React from 'react';

function TelaLogin() {
  return (
    <div>
      <h1>Entre em Sua Conta</h1>
      <form>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <label>
          Senha:
          <input type="password" name="password" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

// Componente para a tela de registro
function TelaRegistro() {
  return (
    <div>
      <h1>Novo Aqui?</h1>
      <p>Registre-se e venha fazer parte da maior rede social!</p>
      <button>Registrar-se</button>
    </div>
  );
}

// Componente principal que renderiza a TelaLogin ou TelaRegistro
class SegundaTela extends React.Component {
  render() {
    // Substitua 'true' pela sua lógica para mostrar a tela de login ou registro
    const mostrarTelaLogin = true;

    return (
      <div>
        {mostrarTelaLogin ? <TelaLogin /> : <TelaRegistro />}
      </div>
    );
  }
}

export default SegundaTela;

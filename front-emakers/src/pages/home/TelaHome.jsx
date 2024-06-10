import React from "react";

function TelaHome() {
  return (
    <div>
      <div className="div-topo-home">
        <img src="src/img/fundo.png" alt="Fundo" className="fundo" draggable="false" />
        <img src="src/img/logocomprido.png" alt="Logo Comprido" className="logo-comprido" draggable="false" />
        <img src="src/img/menu.png" alt="Menu" className="menu" draggable="false" />
      </div>
      <div className="div-centro-home">
        <img src="src/img/icon.png" alt="Icon" className="icon" draggable="false" />
        <img src="src/img/lapis.png" alt="Lapis" className="lapis" draggable="false" />
        <h1 className="nome">Caio Henrique Noronha, 19</h1>
        <h3 className="biografia">Exemplo de bio;<br /> 
          Lorem ipsum dolor sit amet;<br /> 
          Aenean in cursus dolor.<br /> 
          Aliquam vel tortor non justo pulvinar placerat a nec ex. </h3>
        <img src="src/img/lapis.png" alt="Lapis" className="lapis" draggable="false" />
      </div>
      <div className="div-baixo-home">
      <img src="src/img/icon.png" alt="Icon" className="icon" draggable="false" />
      <img src="src/img/finn1.png" alt="Finn1" className="finn-1" draggable="false" />
      <img src="src/img/finn2.png" alt="Finn2" className="finn-2" draggable="false" />
      </div>
    </div>
  );
}
export default TelaHome;
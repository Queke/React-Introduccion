import { useState } from "react";
import ContadorConClase from "./App";

//reglas:
//No se pueden llamar en Ciclos
//No se pueden llamar dentro de una condición
//Siempre tiene que estar al inicio "Nivel más alto del componente"

//SOLO se llaman en dos partes, Solo en componentes de REACT
//SOLO se llaman en custom hooks

//Al crear un custom hook debe ser use*nombre
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };
  return [contador, incrementar];
};
const App = () => {
  //   const [contador, setContador] = useState(0);
  //   const incrementar = () => {
  //     setContador(contador + 1);
  //   };
  const [contador, incrementar] = useContador(0);

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;

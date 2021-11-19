import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({
    normal: "Por defecto",
    texto: "sss",
    select: "",
    check: false,
    estado: "bonita",
  });
  const handleChange = ({ target }) => {
    //   setValue({
    //     ...value,
    //     [e.target.name]: e.target.value,
    //   });
    // };
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>Logitud minima de 5</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="texto" value={value.texto} onChange={handleChange} />
      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">Seleccione</option>
        <option value="chancho">Chancho</option>
        <option value="chanchitotriste">Chanchito Triste</option>
        <option value="chile">Chile</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Casa</label>
        <input
          onChange={handleChange}
          type="radio"
          value="bonita"
          name="estado"
          checked={value.estado === "bonita"}
        />
        <input
          onChange={handleChange}
          type="radio"
          value="fea"
          name="estado"
          checked={value.estado === "fea"}
        />
        <input
          onChange={handleChange}
          type="radio"
          value="despreciable"
          name="estado"
          checked={value.estado === "despreciable"}
        />
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ normal: "Por defecto", texto: "sss" });
  const handleChange = (e) => {
    //   setValue({
    //     ...value,
    //     [e.target.name]: e.target.value,
    //   });
    // };
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
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
    </div>
  );
};

export default App;

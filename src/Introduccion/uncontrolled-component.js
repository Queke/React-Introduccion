const App = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };

  return (
    <form onSubmit={submit}>
      <div>
        <span>Hola</span>
        <input name="campo"></input>
      </div>
      <input name="campo-2"></input>
      <input type="submit" value="enviar" />
    </form>
  );
};

export default App;
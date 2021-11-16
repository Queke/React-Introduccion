import { Component } from "react";
class ContadorClase extends Component {
  state = { contador: 0 };
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
export default ContadorClase;

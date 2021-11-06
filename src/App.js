import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log("ejecutando metodo render button");

    return <button> Enviar</button>;
  }
}

class App extends Component {
  state = {};
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola Mundo!!</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;

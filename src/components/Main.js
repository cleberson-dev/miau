import React, { Component } from "react";
import axios from "axios";
import { RotateLoader } from "react-spinners";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      carregando: false
    };
    this.gerarGatinho = this.gerarGatinho.bind(this);
    this.esconderSpinner = this.esconderSpinner.bind(this);
  }

  gerarGatinho(e) {
    this.setState({ carregando: true });
    axios.get("https://aws.random.cat/meow").then(res => {
      this.setState({
        imageUrl: res.data.file
      });
    });
  }

  esconderSpinner(e) {
    this.setState({ carregando: false });
  }

  render() {
    let { imageUrl, carregando } = this.state;

    let spinnerStyle = {
      display: carregando ? "flex" : "none"
    };

    let spinner = (
      <div className="carregandoArea" style={spinnerStyle}>
        <RotateLoader loading={carregando} color="#b14aed" />
      </div>
    );

    if (imageUrl.length !== 0) {
      return (
        <React.Fragment>
          {spinner}
          <main id="result">
            <img
              src={imageUrl}
              alt="Um lindo gatinho!"
              onLoad={this.esconderSpinner}
            />
            <h3>Que lindinho! Quer ver outro?</h3>
            <button onClick={this.gerarGatinho}>Gerar</button>
          </main>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {spinner}
        <main id="home">
          <h1>Gere um gatinho fofinho agora</h1>
          <button onClick={this.gerarGatinho}>Gerar</button>
        </main>
      </React.Fragment>
    );
  }
}

export default Main;

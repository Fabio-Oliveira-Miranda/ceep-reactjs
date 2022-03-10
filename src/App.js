import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListadeNotas/ListaDeNotas";
import "./assets/App.css";
import ".assets/index.css";

class App extends Component() {
   render () {
    return (
    <section>
    <FormularioCadastro/> 
    <ListaDeNotas/>
      </section>

    );
  }
}

export default App;

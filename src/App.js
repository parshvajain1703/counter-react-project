import NavBar from "./components/navbar"
import './App.css';
import Counters from './components/counters';
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(pops) {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
    //this.setState({ movies })
  }



  handleIncrement = (counter) => {
    counter.value++;
    const counters = this.state.counters;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
  return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}
        />
        </main>
    </React.Fragment>
  );
  }
  
}

export default App;

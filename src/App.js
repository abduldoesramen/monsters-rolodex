import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Yihua", lastName: "Zhang" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                // Within this function, we have access to state and props
                () => {
                  return {
                    // Shallow merge (use same types!)
                    name: { firstName: "Andrei", lastName: "Neaogies" },
                  };
                },
                // Second argument (callback) runs ONLY AFTER the state is updated.
                () => {
                  console.log(this.state);
                }
              );
              // console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

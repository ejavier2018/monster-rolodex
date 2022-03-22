import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("constructor");

    this.state = {
      monsters: [
        { name: "Linda" },
        { name: "Frank" },
        { name: "Jacky" },
        { name: "Andrei" },
      ],
      searchField: "",
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        return this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(users)
        );
      });
  }

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={(event) => {
            console.log(event.target.value);
            const searchField = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />

        {filteredMonsters.map((monster) => {
          return <div key={monster.id}>{monster.name}</div>;
        })}
      </div>
    );
  }
}

export default App;

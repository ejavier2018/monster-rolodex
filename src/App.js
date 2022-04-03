import React, { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    //console.logs("constructor");

    this.state = {
      monsters: [],
      searchField: "",
      //filteredMonsters: [],
    };
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

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

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <div className="app-title">Monster Rolodex</div>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder={"Search Monster"}
        />
        {/*
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={onSearchChange}
        />
    */}

        {/*filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              {monster.id}
              {monster.name}
            </div>
          );
        })*/}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

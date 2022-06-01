import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      })
      .catch((error) => {});
  }

  handleSearchBoxChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="flex flex-col gap-12 bg-bright-lilac p-4">
        <h1 className="text-center text-7xl text-gains-boro">
          Monsters Rolodex
        </h1>
        <SearchBox
          handleChange={this.handleSearchBoxChange}
          placeholder={"search monsters"}
          value={this.state.searchField}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

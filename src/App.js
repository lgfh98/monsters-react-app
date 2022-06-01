import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        console.log({ users });
        this.setState({ monsters: users });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <CardList monsters={this.state.monsters}></CardList>;
  }
}

export default App;

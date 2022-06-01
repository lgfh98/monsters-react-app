import { Component } from "react";
import { Card } from "../card/card.component";

export class CardList extends Component {
  componentDidMount() {
    console.log(this.props.monsters);
  }

  render() {
    return (
      <div className="flex flex-col gap-12 bg-bright-lilac p-4">
        <h1 className="text-center text-7xl text-gains-boro">
          Monsters Rolodex
        </h1>
        <input
          className="max-w-xs self-center p-4 text-lg"
          placeholder="search monsters"
          type="text"
        />
        <div className="container mx-auto grid grid-cols-monster-layout gap-4">
          {this.props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))}
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import { Card } from "../card/card.component";

export class CardList extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container mx-auto grid grid-cols-monster-layout gap-4">
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

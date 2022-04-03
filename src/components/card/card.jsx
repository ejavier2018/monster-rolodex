import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { name, email, image } = this.props;

    return (
      <div className="card-container">
        {/*<h1 key={monster.id}> {monster.name}</h1>*/}
        <img alt={`monster ${name}`} src={image} />
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
    );
  }
}

export default Card;

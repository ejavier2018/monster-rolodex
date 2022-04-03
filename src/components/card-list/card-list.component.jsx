import { Component } from "react";
import Card from "../card/card";
import "./card-list.styles.css";
import "./card.styles.css";

class CardList extends Component {
  render() {
    //console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div key={id}>
              <Card
                name={name}
                email={email}
                image={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              {/*
             <div className="card-container" key={id}>
              
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <h2>{email}</h2>
            </div>
*/}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;

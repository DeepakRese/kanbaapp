import React from "react";
import { Card } from "semantic-ui-react";
import AddList from "../containers/AddList";
import styles from "./ListCard.module.css";
const ListCard = props => {
  console.log(props.title);

  const add = value => {
    props.addtoList(props.listid, value);
  };
  return (
    <div className={styles.grid_item}>
      <Card.Group>
        <Card header={props.title} />
        {props.cards.map(card => {
          return <Card key={card.id} header={card.title} />;
        })}
      </Card.Group>
      <AddList add={add} title="Add card" />
    </div>
  );
};

export default ListCard;

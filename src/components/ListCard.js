import React from "react";
import { Card } from "semantic-ui-react";
import AddList from "../containers/AddList";
import Aux from "../Auxillary";
const ListCard = props => {
  console.log(props.title);

  const add = value => {
    props.addtoList(props.listid, value);
  };
  return (
    <Aux>
      <Card header={props.title}>
        <Card.Group>
          {props.cards.map(card => {
            return <Card key={card.id} header={card.title} />;
          })}
        </Card.Group>
      </Card>
      <AddList add={add} title="Add card" />
    </Aux>
  );
};

export default ListCard;

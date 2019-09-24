import React from "react";
import { Card } from "semantic-ui-react";
import AddList from "../containers/AddList";
import Aux from "../Auxillary";
const ListCard = props => {
  console.log(props.title);
  return (
    <Aux>
      <Card header={props.title}>
        <Card.Group>
          {props.cards.map(card => {
            return <Card key={card.id} header={card.title} />;
          })}
        </Card.Group>
      </Card>
      <AddList add={props.addtoList} />
    </Aux>
  );
};

export default ListCard;

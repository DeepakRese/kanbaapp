import React from "react";
import TitleIcon from "./TitleIcon";
import Aux from "../Auxillary";
const Card = props => {
  return (
    <Aux>
      <TitleIcon iconname="laptop" title="Kanba title" />
      <TitleIcon iconname="book" title="Description" />
      <TitleIcon iconname="fax" title="Activity" />
    </Aux>
  );
};

export default Card;

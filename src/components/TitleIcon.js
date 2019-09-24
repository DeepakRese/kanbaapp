import React from "react";
import { Icon } from "semantic-ui-react";

const TitleIcon = props => (
  <div onClick={props.click}>
    <Icon name={props.iconname} />
    {props.title}
  </div>
);

export default TitleIcon;

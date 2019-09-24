import React from "react";
import { Icon } from "semantic-ui-react";

const TitleIcon = props => (
  <div>
    <Icon name={props.iconname} />
    {props.title}
  </div>
);

export default TitleIcon;

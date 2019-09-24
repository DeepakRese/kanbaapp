import React, { Component } from "react";
import TitleIcon from "../components/TitleIcon";
import Aux from "../Auxillary";

import { Button } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

class AddList extends Component {
  state = { name: "", visible: false };

  listchangeHandler = event => {
    this.setState({ name: event.target.value });
  };

  toggleAddList = () => {
    const isvisible = this.state.visible;
    this.setState({ visible: !isvisible, name: "" });
  };

  addbuttonHandler = () => {
    this.toggleAddList();
    this.props.add(this.state.name);
  };

  render() {
    var addListcontent = null;
    if (this.state.visible) {
      addListcontent = (
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.listchangeHandler}
          />
          <Button color="olive" content="Add" onClick={this.addbuttonHandler} />
          <Icon name="cancel" onClick={this.toggleAddList} />
        </div>
      );
    }
    return (
      <Aux>
        <div onClick={this.toggleAddList}>
          <TitleIcon iconname="add" title={this.props.title} />
        </div>
        {addListcontent}
      </Aux>
    );
  }
}
export default AddList;

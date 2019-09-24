import React, { Component } from "react";
import TitleIcon from "../components/TitleIcon";
import styles from "../components/ListCard.module.css";

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
      <div className={styles.grid_item}>
        <TitleIcon
          iconname="add"
          title={this.props.title}
          click={this.toggleAddList}
        />
        {addListcontent}
      </div>
    );
  }
}
export default AddList;

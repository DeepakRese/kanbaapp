import React, { Component } from "react";
import ListCard from "../components/ListCard";
import Aux from "../Auxillary";
class Board extends Component {
  state = {
    list: ["test", "test 2"],
    listcards: [
      { listname: "test", title: "sample 1", id: 0 },
      { listname: "test", title: "sample 2", id: 1 },
      { listname: "test", title: "sample 3", id: 2 },
      { listname: "test", title: "sample 4", id: 3 },
      { listname: "test 2", title: "sample 1", id: 0 },
      { listname: "test 2", title: "sample 2", id: 1 },
      { listname: "test 2", title: "sample 3", id: 2 },
      { listname: "test 2", title: "sample 4", id: 3 }
    ],
    cardid: 0
  };

  addtoList = value => {
    var currentList = this.state.list;
    currentList.push(value);
    this.setState({ list: currentList });
  };
  render() {
    console.log(this.state.list);
    const lists = this.state.list;
    const listcards = this.state.listcards;

    var currentList = lists.map(listname => {
      var lcards = listcards.filter(listcard => {
        if (listcard.listname === listname) {
          return listcard;
        }
      });
      return (
        <ListCard
          key={listname}
          title={listname}
          cards={lcards}
          addtoList={this.addtoList}
        />
      );
    });
    return <Aux>{currentList}</Aux>;
  }
}

export default Board;

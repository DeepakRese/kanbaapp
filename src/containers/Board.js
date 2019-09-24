import React, { Component } from "react";
import ListCard from "../components/ListCard";
import Aux from "../Auxillary";
class Board extends Component {
  state = {
    list: [{ id: 0, name: "test" }, { id: 1, name: "test 2" }],
    listcards: [
      { listid: 0, title: "sample 1", id: 0 },
      { listid: 0, title: "sample 2", id: 1 },
      { listid: 0, title: "sample 3", id: 2 },
      { listid: 0, title: "sample 4", id: 3 },
      { listid: 1, title: "sample 1", id: 4 },
      { listid: 1, title: "sample 2", id: 5 },
      { listid: 1, title: "sample 3", id: 6 },
      { listid: 1, title: "sample 4", id: 7 }
    ],
    cardid: 0,
    listid: 8
  };

  addtoList = value => {
    var currentList = this.state.list;
    currentList.push(value);
    this.setState({ list: currentList });
  };

  addCard = (id, value) => {
    const currentlistcards = this.state.listcards;
    const currentcardid = this.state.cardid;
    var newcard = {
      listid: id,
      title: value,
      id: currentcardid
    };
    var updatedlistcards = [...currentlistcards, newcard];
    this.setState({
      listcards: updatedlistcards,
      cardid: currentcardid + 1
    });
  };
  render() {
    console.log(this.state.list);
    const lists = this.state.list;
    const listcards = this.state.listcards;

    var currentList = lists.map(list => {
      var lcards = listcards.filter(listcard => {
        if (listcard.listid === list.id) {
          return listcard;
        }
      });
      return (
        <ListCard
          key={list.id}
          listid={list.id}
          title={list.name}
          cards={lcards}
          addtoList={this.addCard}
        />
      );
    });
    return <Aux>{currentList}</Aux>;
  }
}

export default Board;

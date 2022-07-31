import React from "react";
import CardList from "./Cardlist";
import Searchbox from "./Searchbox";
import { robots } from "./robots";

const state = {
  robots: robots,
  searhfield: "",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searhfield: "",
    };
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searhfield: event.target.value });
  };

  render() {

    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searhfield.toLowerCase());
    });
    console.log(filteredRobots);

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}></CardList>
      </div>
    );
  }
}

export default App;

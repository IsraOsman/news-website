import React from "react";
import NewCard from "./NewCard";

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
        <div className="grid_item">
          <NewCard />
        </div>
      </div>
    );
  }
}

export default Grid;

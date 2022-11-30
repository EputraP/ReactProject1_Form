import React, { useState } from "react";
import "./DataList.css";
import CardDataList from "../CardDataList/CardDataList";
import DeletionPopUp from "../DeletionPopUp/DeletionPopUp";

function DataList(props) {
  if (props.data.length == 0) {
    return (
      <div className="data-list-container">
        <div className="no-card-data">
          <h2>Found no Data</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="data-list-container">
        {props.data.map((dataUser) => (
          <CardDataList
            key={Math.random().toString()}
            id={dataUser.id}
            username={dataUser.username}
            age={dataUser.age}
            onDelete={props.onDeleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default DataList;

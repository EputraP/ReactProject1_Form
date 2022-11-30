import React, { useState } from "react";
// import "./CardDataList.css";
import DeletionPopUp from "../DeletionPopUp/DeletionPopUp";

function CardDataList(props) {
  return (
    // <div onClick={props.test} className="card-container">
    //   {/* <h1 className="card-text">
    //     {props.username} ({props.age} years old)
    //   </h1> */}
    //   <DeletionPopUp
    //     key={props.key}
    //     username={props.username}
    //     age={props.age}
    //     test={props.test}
    //   />
    // </div>
    <>
      <DeletionPopUp
        key={props.key}
        id={props.id}
        username={props.username}
        age={props.age}
        onDelete1={props.onDelete}
      />
    </>
  );
}

export default CardDataList;

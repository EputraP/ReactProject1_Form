import React, { useState } from "react";

function DeletionProcess(props) {
  return (
    <>
      {/* {console.log("inDeletionProcess")} */}
      {props.deletionStatus()}
    </>
  );
}

export default DeletionProcess;

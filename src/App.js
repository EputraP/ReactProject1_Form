import React, { useState } from "react";
import DataInput from "./DataInput/DataInput";
import DataList from "./DataList/DataList";
import "./App.css";

function App() {
  const initialData = [
    {
      id: "1",
      username: "Max",
      age: "31",
    },
    {
      id: "2",
      username: "Gio",
      age: "23",
    },
  ];
  // const initialData = [];
  const [saveData, setSaveData] = useState(initialData);

  const saveDataFunc = (enteredData) => {
    // console.log(enteredData);
    setSaveData((prevEnteredData) => {
      return [enteredData, ...prevEnteredData];
    });
    console.log(saveData);
  };
  const DeleteDataHandler = (dataId) => {
    setSaveData((prevData) => {
      const updatedData = prevData.filter((data) => data.id !== dataId);
      return updatedData;
    });
    console.log("delete APP");
  };

  return (
    <div>
      <DataInput onSaveData={saveDataFunc} />
      <DataList data={saveData} onDeleteItem={DeleteDataHandler} />
    </div>
  );
}

export default App;

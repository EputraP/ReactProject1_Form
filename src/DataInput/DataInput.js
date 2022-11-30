import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DataInput.css";

function DataInput(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
    // console.log(enteredUsername);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
    // console.log(enteredAge);
  };

  const notify1 = () => toast("Username and Age must be filled in");
  const notify2 = () => toast("Username must be filled in");
  const notify3 = () => toast("Age must be filled in");
  const notify4 = () => toast("Age must be positive number");

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length == 0 && enteredAge.trim().length == 0) {
      console.log("null");
      notify1();
      return;
    } else if (enteredUsername.trim().length == 0) {
      notify2();
      return;
    } else if (enteredAge.trim().length == 0) {
      notify3();
      return;
    } else if (enteredAge < 1) {
      notify4();
      return;
    }
    let idData = Math.random().toString();
    const dataUser = {
      id: idData,
      username: enteredUsername,
      age: enteredAge,
    };
    console.log(dataUser);
    props.onSaveData(dataUser);
    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div className="data-input-container">
      <form onSubmit={submitHandler}>
        <div className="container-1">
          <div className="container-2">
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                type="text"
                placeholder="string"
                value={enteredUsername}
                onChange={usernameHandler}
              />
            </div>
          </div>
          <div className="container-2">
            <div>
              <label>Age (Years)</label>
            </div>
            <div>
              <input
                value={enteredAge}
                placeholder="integer"
                type="number"
                onChange={ageHandler}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="button">
              Add User
            </button>
            <ToastContainer
              toastStyle={{
                backgroundColor: "red",
                color: "black",
                // fontWeight: "bold",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default DataInput;

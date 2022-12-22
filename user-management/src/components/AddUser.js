import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();
  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const sumbitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 0) {
        setError({
            title: "Invalid age",
            message: "Please enter a non-negative age (> 0).",
          });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  };
  const cancelHandler = () => {
    setError();

  }
  return (
    <div>
      {error && <ErrorModal title="An error occured!" message="Something went wrong" onDismiss={cancelHandler}/>}
      {!error && <Card className={styles.input}>
        <form onSubmit={sumbitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={changeUsernameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={changeAgeHandler}
          ></input>
          <Button type="submit" onClick={cancelHandler}>Add User</Button>
        </form>
      </Card>}
    </div>
  );
};

export default AddUser;

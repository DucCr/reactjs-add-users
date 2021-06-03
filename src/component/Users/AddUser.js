
import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import ErrorModel from '../UI/ErrorModel';

const AddUser = (props) => {

    const [enteredUsername,setEnteredUsername] = useState("");
    const [enteredAge,setEnteredAge] = useState("");
    const [error,setError] = useState("");

    const handlerChangeUsername = (event) => {
        setEnteredUsername(event.target.value);
    }
    const handlerChangeAge = (event) => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                title : "Invalid input",
                message : "Please enter a valid name and age ! (none-empty values)"
            })
            return ;
        }
        if(+enteredAge < 1){
            setError({
                title : "Invalid age",
                message : "Please enter a valid age ! (age > 0)",
            }) 
            return ;
        }
        const objUser = {
            id : Math.random().toString(),
            name : enteredUsername,
            age : enteredAge
        }
        props.onAddUser(objUser);
        setEnteredAge("");
        setEnteredUsername("");
    }
    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
            {error && <ErrorModel 
                title={error.title}
                message={error.message}
                onConfirm = {errorHandler}
            />}
                
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input 
                            id="username" 
                            type="text" 
                            value={enteredUsername}
                            onChange={handlerChangeUsername}
                        ></input>
                        <label htmlFor="age">Age</label>
                        <input 
                            id="age" 
                            type="number"
                            value={enteredAge}
                            onChange={handlerChangeAge}
                        ></input>
                        <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;
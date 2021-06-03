import { useState } from 'react';
import AddUser from './component/Users/AddUser';
import UsersList from './component/Users/UsersList';
import './index.css';
const App = () => {

  const [listUsers,setListUsers] = useState([]);
  const addUserHandler = (objUser) => {
    setListUsers((prevUser) => {
      return [objUser,...prevUser];
    })
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users={listUsers}/>
    </div>
  );
}

export default App;

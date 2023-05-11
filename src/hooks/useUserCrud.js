import axios from "axios";
import { useState } from "react";

const useUserCrud = () => {

  const [users, setUsers] = useState()

  const url = 'https://users-crud.academlo.tech/users/'

  // get
  const getAllUsers = () => {
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  // post 
  // delete
  // update

  return {
    users,
    getAllUsers
  }
};

export default useUserCrud;
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getUser, logOut } from '../../actions/authAction';

function  Home()  {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [foleName, setFoleName] = useState("");

       
    useEffect(() => {
      if(!localStorage.getItem("user_token")){
        window.location.assign("/login")
     }
      const getUserHandler = async () => {
    
        const user_datas = await dispatch(getUser(localStorage.getItem("user_token")));
        setUsername(user_datas.username);
        setFoleName(user_datas.fullName);

    }
    getUserHandler()

    }, [])

   

   

    const logOutHandler = () => {
      dispatch(logOut(localStorage.getItem("user_token")));
    }

 
  return (
    <div>
      
      Home

      <p>{username}</p>
      <p>{foleName}</p>

      <br />
      <button onClick={logOutHandler} >logout</button>
    </div>
  )
}

export default Home
import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { login } from '../../actions/authAction';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({});


  const dispatch = useDispatch()

  const LoginHandker = async (e) => {
    e.preventDefault();

    const data = await dispatch(login({email, password}));
    setError(data);

  }
  return (
    <div>
        <form>
            <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password'  value={password} onChange={e => setPassword(e.target.value)}/>
            <button onClick={LoginHandker}>Login</button>

            {Object.keys(errors).length >= 1 ?(
                    <>
                        <div style={{ color: "red" }}>
                            <p>{errors.email && errors.email[0]}</p>
                            <p>{errors.password && errors.password[0]}</p>
                            <p>{errors.user && errors.user[0]}</p>
                        </div>
                    </>
            ):(
                <>
                </>
            )}
        </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../actions/authAction';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [fuleName, setFuleName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setError] = useState({});


    const dispatch = useDispatch()
    async function Signup(e) {
        e.preventDefault();
        let obj = { email, fuleName, username, password };
        const data = await dispatch(signup(obj));

        setError(data);
    }


    return (
        <div>
            <form>
                <input type="text" placeholder='email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input type="text" placeholder='fule name' value={fuleName} onChange={(e) => {
                    setFuleName(e.target.value)
                }} />
                <input type="text" placeholder='username' value={username} onChange={(e) => {
                    setUsername(e.target.value)
                }} />
                <input type="text" placeholder='password' value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />


                <button onClick={Signup}>Signup</button>

                {Object.keys(errors).length >= 1 ?(
                    <>
                        <div style={{ color: "red" }}>
                            <p>{errors.email && errors.email[0]}</p>
                            <p>{errors.fuleName && errors.fuleName[0]}</p>
                            <p>{errors.username && errors.username[0]}</p>
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

export default Signup
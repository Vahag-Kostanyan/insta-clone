import axios from "axios";

const backUrl = "http://127.0.0.1:8080/api/";


export const signup = (data) => axios.post(backUrl+"auth/signup", {
    email: data.email,
    fuleName: data.fuleName,
    username: data.username,
    password: data.password
});
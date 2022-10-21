import axios from "axios";

const backUrl = "http://127.0.0.1:8080/api/";


export const signup = (data) => axios.post(backUrl+"auth/signup", {
    email: data.email,
    fullName: data.fullName,
    username: data.username,
    password: data.password
});

export const login = (data) => axios.post(backUrl+"auth/login", {
    email: data.email,
    password: data.password
}) 

const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem("user_token")}`
    }
}

export const getUser = (data) => axios.post(backUrl+"auth/getUser", {
    token: data
}, config) 

export const logOut = (token) => axios.post(backUrl+"auth/logout", {
    token
})
import * as api from "../api/authApi"



export const signup = (datas) => async (dispatch) => {
    const res = await api.signup(datas);

    const data = res.data;

    if(data.status == "error"){
        return data.data
    }

    window.location.assign("/login")
}


export const login = (datas) => async (dispatch) => {
    const res = await api.login(datas);
    const data = res.data;

    if(data.status == "error") return data.data;

    localStorage.removeItem("user_token");
    localStorage.setItem("user_token", data.data);

    window.location.assign("/")
}

export const getUser = (datas) => async (dispatch) => {
    const res = await api.getUser(datas);
    const data = res.data;

    if(data.status == "error") return   window.location.assign("/login");

    return data.data
}

export const logOut = (token) => async (dispatch) => {
    const res = await api.logOut(token);
    
    if(res.data.status = "status"){
        localStorage.removeItem("user_token"); 
        window.location.assign("/login")
    }
}
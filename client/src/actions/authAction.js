import * as api from "../api/authApi"

export const signup = (datas) => async (dispatch) => {
    const res = await api.signup(datas);

    const data = res.data;
    if(data.status == "error"){
        return data.data
    }

    window.location.assign("/login")
}


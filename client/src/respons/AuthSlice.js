export default (auth = {}, action) => {
    switch(action.type) {
        case "signup_error":
            return action.payload;
    }
    return auth;
}
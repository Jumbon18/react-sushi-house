import axios from "axios";

export function auth(email, password) {
    return async dispatch => {
        const user = {
            email,
            password
        };
        if (user.email)
            try {
                const login = await axios.post('http://localhost:3000/auth/login', {
                    user,
                    withCredentials:true});
                console.log(login);
            } catch (e) {
                console.log(e);
            }
    }
    }


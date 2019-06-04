import axios from "axios";

export function signUp(user) {
    return async dispatch =>{
try{
    const newUser = await axios.post('http://localhost:3000/auth/signup',user);
    console.log(newUser)
}catch (e) {
    console.log(e);


}
    }
}
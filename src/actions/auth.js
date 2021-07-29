import { firebase, provider } from '../firebase/firebase';
import { resetExpenses } from './expense';
export const login = ({uid}) => {
    return {
        type: 'LOGIN',
        uid,
    }
}
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(provider);
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}
export const stopLogin = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(() => {
            dispatch(resetExpenses());
        });
    }
}
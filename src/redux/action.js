import { types } from "./types";


function getUsers(users) {
    return {
        type: types.USERS,
        payload: users
    }
}


export function fetchUsersesAction() {
    return async function (dispatch) {
        const responce = await fetch('https://reqres.in/api/users/')
        const data = await responce.json()
        dispatch(getUsers(data))
    }
}
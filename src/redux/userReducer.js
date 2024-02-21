import { types } from "./types";

const initialTitle = {
    users: []
}

export default function userReducer(state = initialTitle, action) {

    switch (action.type) {
        case types.USERS:
            return { ...state, users: [...state.users, action.payload.data] }
        default: return state
    }

}
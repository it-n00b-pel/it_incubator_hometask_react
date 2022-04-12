import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case "sort": {
            // need to fix
            switch (action.payload) {
                case "up":
                    return [...state].map((u) => {
                        return {...u}
                    }).sort((a, b) => a.name > b.name ? -1 : 1);
                case "down":
                    return [...state].map((u) => {
                        return {...u}
                    }).sort((a, b) => a.name > b.name ? 1 : -1);
            }

            return state
        }
        case "check": {

            return [...state].map((u) => {
                return {...u}
            }).filter(u => u.age > 18)
        }
        default:
            return state
    }
}
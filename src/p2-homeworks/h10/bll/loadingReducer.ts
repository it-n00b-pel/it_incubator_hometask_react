export type LoadStateType = {
    load: boolean
}
const initState: LoadStateType = {
    load: false
}
export type ChangeLoadAT = {
    type: "ChangeLoad",
    load :boolean
}
export const loadingReducer = (state = initState, action: ChangeLoadAT): LoadStateType => { // fix any
    switch (action.type) {
        case 'ChangeLoad': {
            return {...state, load: action.load}
        }
        default: return state
    }
}

export const loadingAC = (load: boolean): ChangeLoadAT => {
    return {
        type : "ChangeLoad",
        load
    }
} // fix any
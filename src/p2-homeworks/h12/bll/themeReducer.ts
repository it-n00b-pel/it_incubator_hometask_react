type InitStateThemeType = {
    theme: string,
}

const initState: InitStateThemeType = {
    theme: 'dark',
};
export type ChangeThemeAT = {
    type: "ChangeTheme",
    theme : string,
}
export const themeReducer = (state = initState, action: ChangeThemeAT): InitStateThemeType => { // fix any
    switch (action.type) {
        case "ChangeTheme": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};



export const changeThemeC = (theme: string): ChangeThemeAT => {
    return {
        type: 'ChangeTheme',
        theme,
    }
};
import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import {homeW} from "../../p1-main/m1-ui/u1-app/App";

const themes = ["dark", "red", "some"];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch();
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        console.log(e.currentTarget.value)
        dispatch(changeThemeC(e.currentTarget.value))

    }
    const mappedOptions: JSX.Element[] | string[] = themes ? themes.map((o) => ( // map options with key
        <option value={o} label={o}>
            {o}
        </option>
    )) : []

    return (
        <div className={s.hw12}>

            <div className={s[theme]}>
                <select onChange={onChangeCallback}>
                    {mappedOptions}
                </select>
                {" change background"}

                <hr/>
                <span className={s[theme + "-text"]}>
               <div style={homeW}>homeworks 12</div>
            </span>

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr/>
            </div>
        </div>
    );
}

export default HW12;

import React, {useEffect} from "react"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {homeW} from "../../p1-main/m1-ui/u1-app/App";
import style from "./10.module.css"
import loadIMG from "./Gear-0.2s-200px.gif"

function HW10() {
    // useSelector, useDispatch

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.load)
    const dispatch = useDispatch()
    const setLoading = () => {

        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        // setTimeout(()=> {
        //     dispatch(loadingAC(false))
        // }, 2000)

    };

    useEffect(() => {
        let id: any;
        if (loading) {
            // dispatch(loadingAC(true))
             id = setTimeout(() => {
                dispatch(loadingAC(false))
            }, 2000)
        }


        return () => {
            clearTimeout(id)
        }
    }, [loading])

    return (

        <div>
            <div style={homeW}>homeworks 10</div>
            {/*should work (должно работать)*/}
          <div className={style.loading}>
              {loading
                  ? (
                      // <div>крутилка...</div>
                      <img src={loadIMG} alt=""/>
                  ) : (
                      <div>
                          <SuperButton onClick={setLoading}>set loading...</SuperButton>
                      </div>
                  )
              }
          </div>


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

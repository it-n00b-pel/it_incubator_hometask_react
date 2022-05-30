import React from "react";
import {Slider} from "antd";
// import 'antd/dist/antd.css';
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropstype = {
    value1: number
    value2: number
    onChangeRangeV1: (value: number) => void
    onChangeRangeV2: (value: number) => void
}

const SuperDoubleRange = (props: SuperDoubleRangePropstype) => {
    const onChangeCallback = (value: [number, number]) => {
        if (props.value2 <= props.value1 + 10) return
        props.onChangeRangeV1(value[0])
        props.onChangeRangeV2(value[1])
    }

    return (
        <div className={s.doubleRange}>
            <Slider range value={[props.value1, props.value2]} onChange={onChangeCallback} tooltipVisible={false}
                    disabled={props.value2 <= props.value1 + 10} />
        </div>
    );
};

export default SuperDoubleRange;
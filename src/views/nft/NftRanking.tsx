import React from "react";
import {getGasPrice} from "../../api";


export default function NftRanking() {


    const func_getGasPrice = () => {
        const data = getGasPrice()
        console.log('=======')
        console.log(data)
        console.log('+++++++')
    }
    return (
        <>
            <div>
                <h1>NftRanking</h1>
                <button onClick={func_getGasPrice}>
                    手续费
                </button>
                <h2>sdsad</h2>
            </div>
        </>
    )
}

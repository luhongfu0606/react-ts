import React from "react";
import { getGasPrice } from "../../api";
export default function NftRanking() {
    // const [gasPrice, usegasPrice] = useState()

    const func_getGasPrice = async() => {
        await getGasPrice().then(
            response => {
                console.log('成功了', response.data) },
               error => {
                console.log('失败了', error) }
               )
        // usegasPrice(data)
        console.log('=======')
        
        console.log('+++++++')
    }
    return (
        <>
            <div>
                <h1>NftRanking</h1>
                <button onClick={func_getGasPrice}>手续费</button>
                {/* <h2>{gasPrice}</h2> */}
            </div>
        </>
    )
}

import request from "../utils/request";


export const getGasPrice = () => {
    return request({
        url: "/monitor/eth/gasprice",
        method: "get"
    })
}

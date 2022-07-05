import request from "../utils/request";

/*手续费获取*/
export const getGasPrice = () => {
    return request({
        url: "/monitor/eth/gasprice",
        method: "get"
    })
}

import request from "../utils/request";

/*手续费获取*/
export const getGasPrice = () => {
    return request({
        url: "/monitor/eth/get_gasprice",
        method: "get"
    })
}

import request from "../utils/request"

export function getWarehouseInfo(id){
    return request({
        url:`/warehouse-item/getWarehouseInfo/${id}`,
        method:"get",
    })
}
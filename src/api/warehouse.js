import request from "../utils/request"

export function getWarehouseInfo(id){
    return request({
        url:`/warehouse-item/getWarehouseInfo/${id}`,
        method:"get",
    })
}

export function getWarehouseInfos(params){
    return request({
        url:`/warehouse-item/getInfos`,
        method:"get",
        params:{
            limit:params.limit,
            page:params.page,
        }
    })
}

export function getWarehouseByType(params){
    return request({
        url:"/warehouse-item/getWarehouseByType",
        method:"get",
        params:{
            limit:params.limit,
            page:params.page,
            type:params.type
        }
    })
}
import request from "../utils/request"

export function getUserInfos(params){
    return request({
        url:'/user/getUserInfos',
        method: 'get',
        params:{
            limit:params.limit,
            page:params.page
        }
    })
}
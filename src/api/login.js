import request from "../utils/request"

export function login(userInfo){
    return request({
        url:'/user/login',
        method: 'post',
        data:userInfo,
    })
}

export function userModify(params){
    return request({
        url:'user/modify',
        method: 'post',
        params:{
            realname:params.realname,
            phone:params.phone,
            position:params.position
        }
    })
}
export function userRemove(account){
    return request({
        url:`user/remove/${account}`,
        method: 'post',
    })
}
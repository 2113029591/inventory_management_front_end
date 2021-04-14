import request from "../utils/request"
export  function  userCreate(createInfo){
    return request({
        url:"user/create",
        method:"post",
        data:createInfo,
    })
}
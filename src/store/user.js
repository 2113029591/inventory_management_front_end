import router from "@/router";
// import {login} from "@/api/login"
// import {setToken} from "@/utils/auth";
export default {
    state:{
        userInfo:null,//用户信息记录
        token:null,
    },
    getters:{
        userInfo: (state)=>{
            if (state.userInfo == null) {
                let sessionUser = sessionStorage.getItem('user')
                if (sessionUser != null) {
                    //json.parse  把JSON规则的字符串转换为JSONObject
                    state.userInfo = JSON.parse(sessionUser)
                    return sessionUser
                } else {
                    let localeUser = localStorage.getItem('user')
                    if (localeUser != null) {
                        state.userInfo = JSON.parse(localeUser)
                    }
                    return localeUser
                }
            }
            return state.userInfo
        },
        token: (state) => {
            if (state.token == null) {
                let sessionToken = sessionStorage.getItem('token')
                if (sessionToken != null) {
                    state.token = sessionToken
                    return sessionToken
                } else {
                    let localeToken = localStorage.getItem('token')
                    state.token = localeToken
                    return localeToken
                }
            }
            return state.token
        },
    },
    mutations: {
        //将token放入localStorage中
        setToken(state, token, flag = true) {
            if (flag) {
                localStorage.setItem('token', token)
            } else {
                sessionStorage.setItem('token', token)
            }
        },
        //获取userInfo 用户信息
        setUserInfo(state, userInfo, flag = true) {
            state.userInfo = userInfo
            state.token = userInfo.token
            if (flag) {
                localStorage.setItem('user', JSON.stringify(userInfo))
            } else {
                sessionStorage.setItem('user', JSON.stringify(userInfo))
            }
            this.commit('setToken', userInfo.token, flag)
        },
        //登出
        logout(state) {
            state.userInfo = null
            state.token = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
            router.push('/login')
        },
    },
    actions:{
        // actionLogin({commit},userInfo){
        //     return new Promise((resolve,reject)=>{
        //         login(userInfo).then(res=>{
        //             let token=res.data.data
        //             // commit('SET_TOKEN',token);
        //             setToken(token);
        //             resolve(res);
        //         }).catch(err=>{
        //             reject(err);
        //         })
        //     })
        // },
    },
}
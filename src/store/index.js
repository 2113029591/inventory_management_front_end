import Vue from "vue"
import Vuex from "vuex"
import user from "@/store/user";
import app from "@/store/app";

Vue.use(Vuex)

const  store=new Vuex.Store({
    state:{},
    getters:{},
    mutations:{},
    models: {
        user,
        app,
    },

})

export default store

export default {
    state:{
    isCollapsed:false,
    },
    getter:{
        isCollapse: (state) => {
            return state.isCollapse
        },
    },
    mutations:{
        toggleCollapse (state) {
            state.isCollapse = !state.isCollapse
        },
    }
}
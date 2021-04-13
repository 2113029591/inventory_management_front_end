import Vue from "vue"
import VueRouter from "vue-router"
import login from "@/views/login";
import home from "@/views/admin/home/home";
import userManage from "@/views/admin/home/userManage";
import itemInformation from "@/views/admin/home/itemInformation/itemInformation";
// import userComponent from "@/views/admin/home/userManage/userComponent";
import itemChangeInformation from "@/views/admin/home/itemChangeInformation/itemChangeInformation";

Vue.use(VueRouter)

const routes=[
    {path:"/",name:"login",component:login},
    {path:"/login",component:login},
    {path: "/home",component: home,
        redirect:"/home/userManage",
        children:[
            {
                path:"userManage",component:userManage,
                children:[
                    // {path:"userComponent",component:userComponent}
                ]
            },
            {path:"itemInformation",component: itemInformation },
            {path:"itemChangeInformation",component: itemChangeInformation }
        ]
    }
]

const router=new VueRouter({
    routes,
})
export  default router
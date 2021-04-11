<template>
  <div>
    <home_header></home_header>
    <home_aside></home_aside>
    <home_main></home_main>
  </div>
</template>

<script>
import home_aside from "@/views/admin/home/components/home-aside";
import home_header from "@/views/admin/home/components/home-header";
import home_main from "@/views/admin/home/components/home-main";
export default {
  name: "home",
  data(){
    return{}
  },
  components:{
    home_header,
    home_aside,
    home_main
  }
}
</script>

<style scoped>

</style>
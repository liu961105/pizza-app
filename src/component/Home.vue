<template>
    <div>
      <h1>home</h1>
      <button class="btn btn-success" @click="goToMenu">Let's order</button>
    </div>
</template>
<script>
export default {
    methods: {
        goToMenu(){
            //指定跳转地址
            this.$router.replace("/menu")
        }
    },
}
</script>
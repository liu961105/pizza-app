<template>
  <div class="row">
    <div class="col-sm-12 tetx-center" id="home">
      <div class="background">
        <div class="background content">
          <h1>欢迎大家品尝Pizza!</h1>
          <h2>这里有你非常喜欢的Pizza!</h2>
          <button class="btn btn-success" @click="goToMenu">Let's order</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToMenu() {
      //指定跳转地址
      this.$router.replace("/menu");
    },
  },
};
</script>
<style scoped>
#home {
  background: url("../../src/assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}
.background {
  background: #eee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 20px;
}
</style>
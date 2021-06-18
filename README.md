## 全局守卫
     router.beforeEach((to, from, next) => {
         //判断store 中 isLogin===false
         if (to.path == "/login" || to.path == "/register") {
             next();
         } else {
             alert("还没有登录，请先登录!");
             next("/login")
         }
     })
## 后置钩子 路由后触发
router.afterEach((to, from) => {

})
## 路由独享守卫
{ path: "/admin", component: Admin,beforeEnter: (to, from, next) => {
     eg:非登录状态不能访问此页面
     //不会显示
     next(false)
} }
## 组件内守卫
  beforeRouteEnter(to, from, next) {
      next(vm=>{
          alert("hello"+vm.name)
      })
  }

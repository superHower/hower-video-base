<template>
  <div id="app">
    <nav>
      <ul>
        <li><RouterLink to="/">Go to Home</RouterLink></li>
        <li><RouterLink to="/login">Go to Login</RouterLink></li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
    <div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
/* 你的全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  /* 你的导航栏样式 */
}

router-link {
  /* 你的路由链接样式 */
}
</style>
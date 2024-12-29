import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由配置
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);
app.use(router);

registerMicroApps([
  {
    name: "admin", 
    entry: '//localhost:3001', 
    activeRule: "/admin", 
    container: "#app"
  },
  {
    name: "sub-vue", 
    entry: '//localhost:3002',
    activeRule: "/sub-vue",
    container: "#app"
  },

]);

// 启动 qiankun
start({
  prefetch: false, // 取消预加载
});


app.mount('#app');
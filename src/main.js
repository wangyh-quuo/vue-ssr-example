import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import {createRouter} from './router';
import store from './store';

Vue.config.productionTip = false;

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
  // 创建 router 实例
  const router = createRouter()

  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router };
}

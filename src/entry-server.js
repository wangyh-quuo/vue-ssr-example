import { createApp } from './main';

export default context  => {
  const { app, router } = createApp();
  // 设置服务器端 router 的位置
  router.push(context.url);
  return app;
};

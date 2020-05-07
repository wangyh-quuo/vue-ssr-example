import { createApp } from './main';

export default (context) => {
  console.log(context)
  const { app } = createApp();
  return app;
};

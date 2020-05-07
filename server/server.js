const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');
const renderer = createBundleRenderer(
  path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'),
  {
    template: require('fs').readFileSync(
      path.resolve(__dirname, '../public/index-ssr.html'),
      'utf-8'
    ),
  }
);
const server = require('express')();

server.get('*', (req, res) => {
  const context = {
    title: 'ssr demo',
    meta: `
    <meta charset="utf-8">
    `,
  };

  renderer.renderToString(context, (err, html) => {
    // 处理错误……
    if (err) {
      console.log(err);
      res.status(500).end('Internal Server Error');
      return;
    }
    res.end(html);
  });
});
server.listen(8888, () => {
  console.log('监听 localhost:8888');
});

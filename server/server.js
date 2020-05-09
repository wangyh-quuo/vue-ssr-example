const path = require("path");
const { createBundleRenderer } = require("vue-server-renderer");
const express = require("express");

// template
const template = require("fs").readFileSync(
  path.resolve(__dirname, "../public/index-ssr.html"),
  "utf-8"
);

// server bundle
const serverBundle = require(path.resolve(
  __dirname,
  "../dist/vue-ssr-server-bundle.json"
));

// client bundle
const clientManifest = require(path.resolve(
  __dirname,
  "../dist/vue-ssr-client-manifest.json"
));

const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
});

const server = express();
// 需要启动静态服务器，否则静态资源找不到Uncaught SyntaxError: Unexpected token <;
server.use("/js", express.static(path.resolve(__dirname, "../dist/js")));
server.use("/img", express.static(path.resolve(__dirname, "../dist/img")));
server.use("/css", express.static(path.resolve(__dirname, "../dist/css")));
server.use(
  "/favicon.ico",
  express.static(path.resolve(__dirname, "../dist/favicon.ico"))
);

server.get("/", (req, res) => {
  const context = {
    title: "ssr demo",
    meta: `
    <meta charset="utf-8">
    `,
    url: req.url
  };
  console.log(context.url);
  renderer.renderToString(context, (err, html) => {
    // 处理错误……
    if (err) {
      console.log(err);
      res.status(500).end("Internal Server Error");
      return;
    }
    console.log(html);
    res.end(html);
  });
});
server.listen(7777, () => {
  console.log("监听 localhost:7777");
});

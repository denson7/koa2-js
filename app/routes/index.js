const fs = require("fs");

module.exports = (res) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    const route = require(`./${file}`);
    res.use(route.routes()).use(route.allowedMethods()); //allowedMethods  响应option
  });
};

// OPTIONS方法的作用
// 1.检测服务器所支持的请求方法
// 2.CORS中的预检请求

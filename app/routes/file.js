const Router = require("koa-router");

const router = new Router({ prefix: "/file" });
const { verify, chunkUpload } = require("../controllers/file");
const { auth } = require("../config");

router.post("/verify", verify);
router.post("/", chunkUpload);

// router.get("/test", async (ctx) => {
//   // 设置返回响应头
//   ctx.set("Allow", "GET,POST");
//   ctx.body = db;
// });

module.exports = router;

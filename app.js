const express = require("express"); // 載入 Express
const { engine } = require("express-handlebars"); // 載入 Express-handlebars
const app = express();
const port = 3000; // 設定連接埠
const restaurants = require('./public/jsons/restaurant.json').results // 陣列包在 results 屬性中
// const BASE_IMG_URL =
//   "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/";

// 告訴 Express 把樣本引擎交給 Express-handlebars
app.engine('.hbs', engine({ extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

// 將 restaurant.json 載入 Express 中
app.use(express.static("public"));

// 將網站首頁從根目錄(/)重定位到餐廳清單(/restaurants)
app.get("/", (req, res) => {
  res.redirect("/restaurants");
});

// 設定首頁路由 -> 修改成渲染 index.hbs 的內容
app.get("/restaurants", (req, res) => {
  res.render("index", { restaurants: restaurants});
});

// 用 params 做動態路由 -> 新增會顯示 detail.hbs 頁面的路由
app.get("/restaurant/:id", (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find((rs) => rs.id.toString() === id)
  res.render('detail', { restaurant });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
});

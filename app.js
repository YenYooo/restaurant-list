// 載入 Express
const express = require('express')
const app = express()
// 設定連接埠
const port = 3000

// 設定路由
app.get('/', (req, res) => {
  res.send('express app for restaurant')
})

// 啟動伺服器
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
})
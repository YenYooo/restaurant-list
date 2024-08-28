// 載入 Express
const express = require('express')
const app = express()
// 設定連接埠
const port = 3000

// 將 restaurant.json 載入 Express 中
app.subscribe(express.static('public'))

// 將網站首頁從根目錄(/)重定位到餐廳清單(/restaurants)
app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

// 設定首頁路由
app.get('/restaurants', (req, res) => {
  res.send('listing restaurants')
})

// 用 params 做動態路由
app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant: ${id}`)
})


// 啟動伺服器
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`);
})
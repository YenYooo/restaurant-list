# 餐廳清單 1.0

此專案是透過 Node.js 、Express 與 Express-handlebars 所架構的餐廳網站，提供使用者獲知餐廳資訊，例如：餐廳類別、地址、電話與特色描述。

## 環境建置與使用工具

* [Visual Studio Code](https://code.visualstudio.com/) - 開發環境
* [Node Version Manager (nvm)](https://github.com/coreybutler/nvm-windows) - Node.js 建立本機伺服器
* [Express](https://www.npmjs.com/package/express) - Node.js 後端框架，架設伺服器
* [nodemon](https://www.npmjs.com/package/nodemon) - 自動重啟伺服器
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 樣板引擎
* [Bootstrap v5.1.3](https://getbootstrap.com/docs/5.1/getting-started/download/) - 前端工具包
* [Font Awesome](https://fontawesome.com/) - icon

## 安裝與執行步驟

1. 開啟 terminal，進入欲存放此專案的資料夾，使用 git clone + URL 複製該專案

```
git clone https://github.com/YenYooo/restaurant-list.git
```

2. 在 terminal，輸入 npm install，安裝 npm 套件

```
npm install
```

3. 在 terminal，輸入 nodemon app.js，安裝 nodemon套件

```
nodemon app.js
```

4. 當 terminal 回傳以下字樣，代表伺服器與資料庫已啟動，並連結成功

```
express server is running on http://localhost:3000
```

5. 可開啟另一瀏覽器輸入``http://localhost:3000``，進入「我的餐廳清單」網站

## 功能描述

* 使用者可在首頁檢視全部餐廳，含照片、名稱、分類和評分
* 使用者可點擊特定餐廳檢視相關聯絡資訊，含類別、地址、電話、照片和其特色描述
* 使用者可點擊各頁面左上角之「我的餐廳清單」，可快速回到首頁
* 使用者可於搜尋列輸入中文名稱、英文名稱或餐廳類別進行相關搜尋

## 網站畫面

![index](https://github.com/YenYooo/restaurant-list/blob/main/public/img/index.png)

![detail](https://github.com/YenYooo/restaurant-list/blob/main/public/img/detail.png)
![search](https://github.com/YenYooo/restaurant-list/blob/main/public/img/search.png)

## 致謝

* [Pierce_README參考寫法](https://github.com/pierceshih15/restaurantList.git)
* [Eason_README參考寫法](https://github.com/Eason0in/Restaurant-CRUD.git)

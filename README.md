# 短網址產生器

此專案主要透過 mongoDB 與 Express 建立短網址連結，並透過產生之短網址可直接連接到原先輸入的連結位址。

## 產品功能

-   透過 Express 以及模板引擎 handlebars，產生輸入及輸出短網址的頁面

## 專案畫面

![image](https://github.com/Ray7808/shortLink/blob/main/img/mainImage.png)

![image](https://github.com/Ray7808/shortLink/blob/main/img/generateShortLink.png)

![image](https://github.com/Ray7808/shortLink/blob/main/img/copyShortLink.png)

## 安裝流程

1. git clone 下載檔案

    ```
    git clone https://github.com/Ray7808/shortLink.git
    ```

2. 安裝相關套件

    ```
    npm install
    ```

    ```
    npm i -g nodemon@3.0.0
    ```

3. (非必要)新增種子資料

    ```
    npm run seed
    ```

4. 執行程式
    ```
    npm run start
    ```

## 使用的套件

-   Bootstrap
-   Express
-   Handlebars
-   Nodemon
-   dotenv
-   body-parser
-   mongodb
-   mongoose

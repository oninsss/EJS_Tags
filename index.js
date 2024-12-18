const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "chery"],
        htmlContent: "<em> This is some em text </em>",
    };

    res.render('index.ejs', data);
});
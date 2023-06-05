const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get('/',(req,res) => {
    res.send("Hello, World!");
});

app.get('/json',(req,res) => {
    res.json({
        name:"Mohammed Noumaan",
        age:20
    });
});

app.get('/route',(req,res) => {
    res.send("Hello, World from Route");
});

app.get('/html',(req,res) => {
    res.send(
    `<html>
        <body style = "background-color: black;">
            <h1 style =" color: red;">
                Sample Text
            </h1>
        </body>
    </html>`
    );
});

const port = 3001;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
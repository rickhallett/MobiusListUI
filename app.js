const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());
app.use(serveStatic(path.join(__dirname, './dist/spa')));

const port = process.env.PORT || 8088;

app.listen(port, () => {
    console.log(`Node Express.js server listening at ${port}`);
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    return res.send('Hello Express (ts-node-dev)');
});
app.listen(3333);

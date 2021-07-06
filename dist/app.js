"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const app = express_1.default();
app.use(express_1.default.static(__dirname + '/static'));
const handleRequest = (req, res, next) => {
    fs_1.default.readFile(__dirname + req.url, null, (error, data) => {
        if (error) {
            next();
        }
        else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    });
};
const handleUnmatchedUrl = (_req, res, _next) => {
    res.redirect('/index.html');
};
app.use(handleRequest);
app.use(handleUnmatchedUrl);
http_1.default.createServer(app).listen(process.env.PORT || 8000, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || 8000}`);
});

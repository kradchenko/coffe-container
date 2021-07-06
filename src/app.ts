import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import fs from 'fs';

const app = express();

app.use(express.static(__dirname + '/static'));

const handleRequest = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(__dirname + req.url, null, (error: any, data: any) => {
        if (error) {
            next();
        } else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    });
};

const handleUnmatchedUrl = (_req: Request, res: Response, _next: NextFunction) => {
    res.redirect('/index.html');
};

app.use(handleRequest);

app.use(handleUnmatchedUrl);

http.createServer(app).listen(process.env.PORT || 8000, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || 8000}`);
});

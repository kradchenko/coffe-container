import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import fs from 'fs';

const app = express();

app.use(express.static(__dirname + '/static'));

const handleRequest = (req: Request, res: Response, _next: NextFunction) => {
    fs.readFile(__dirname + req.url, null, (error: any, data: any) => {
        if (error) {
            res.writeHead(404);
            res.write('Something went wrong!');
        } else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    });
};

app.use(handleRequest);

http.createServer(app).listen(process.env.PORT || 8000);

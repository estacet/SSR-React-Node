import express from 'express';
import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../App';

const app = express();

app.get("/", (req: Request, res: Response) => {
    fs.readFile(path.resolve(__dirname, "../client/index.html"), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
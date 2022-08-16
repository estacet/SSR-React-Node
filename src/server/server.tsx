import express from 'express';
import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from '../shared/App';
import { StaticRouter } from "react-router-dom/server";
import { AppContextWrapper } from "../shared/context/AppContext";

const app = express();

app.get( /\.(js|css|png)$/, express.static( path.resolve( __dirname, '../client' ) ) );

app.use("/", (req: Request, res: Response) => {
  fs.readFile(path.resolve(__dirname, "../client/index.html"), "utf8", async (err, data) => {
    if (err) {
      return res.status(500).send("An error occurred");
    }
  
    //const contextValue = {};
    
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <AppContextWrapper>
            <StaticRouter location={req.originalUrl}>
              <App />
            </StaticRouter>
          </AppContextWrapper>
        )}</div>`
      )
    );
  });
});
//<script>window.initialData = ${JSON.stringify(contextValue)};</script>

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
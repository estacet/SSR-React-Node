"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
var path_1 = require("path");
var react_1 = require("react");
var server_1 = require("react-dom/server");
var App_1 = require("../shared/App");
var server_2 = require("react-router-dom/server");
var app_1 = require("../shared/app");
var routes_1 = require("../routes");
var react_router_dom_1 = require("react-router-dom");
var app = (0, express_1["default"])();
app.get(/\.(js|css|png)$/, express_1["default"].static(path_1["default"].resolve(__dirname, '../client')));
app.get("/", function (req, res) {
    var cardResp = null;
    fs_1["default"].readFile(path_1["default"].resolve(__dirname, "../client/index.html"), "utf8", function (err, data) {
        if (err) {
            return res.status(500).send("An error occurred");
        }
        (0, app_1.getCardsData)().then(function (response) {
            cardResp = response;
        });
        var matchRoute = routes_1.routes.find(function (route) { return (0, react_router_dom_1.matchPath)(route, req.originalUrl); });
        console.log(matchRoute.component);
        //"start:server": "nodemon ./dist/server/server.js",
        //let componentData = null;
        // if( typeof matchRoute.component.fetchData === 'function' ) {
        //   componentData = await matchRoute.component.fetchData();
        // }
        return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(server_1["default"].renderToString(<server_2.StaticRouter location={req.originalUrl} context={cardResp}>
            <App_1.App name="App"/>
          </server_2.StaticRouter>), "</div>")));
    });
});
app.listen(3000, function () {
    console.log("Server started on port 3000");
});

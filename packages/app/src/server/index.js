import "@babel/polyfill";

import React from "react";
import express from "express";
import PromiseRouter from "express-promise-router";
import ReactDOMServer from "react-dom/server";
import { html } from "common-tags";

import App from "../shared/App";

const { PORT, WDS_PORT } = process.env;

if (PORT == null || WDS_PORT == null) {
  throw new Error("Environment variables PORT and WDS_PORT must be set!");
}

const app = express();
const router = new PromiseRouter();

router.get("*", async (req, res) => {
  const appHtml = await ReactDOMServer.renderToString(<App />);
  const documentHtml = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
      <script src="http://localhost:${WDS_PORT}/bundle.js"></script>
    </html>
  `;

  res.send(documentHtml);
});

app.use(router);

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}...`);
});

const express = require('express');
const {createProxyMiddleware, fixRequestBody} = require('http-proxy-middleware');
const winston = require('winston');
const { format, transports } = require('winston');

const logger = winston.createLogger({
    format: format.combine(format.splat(), format.simple()),
    transports: [new transports.Console()],
});

const app = express();

app.use(
    '/forward',
    createProxyMiddleware({
        target: 'http://localhost:3001/',
        pathRewrite: {'^/': '/target'},
        changeOrigin: true,
        logger,
        // on: {
        //     proxyReq: fixRequestBody,
        // },
    }),
);

app.listen(3000);

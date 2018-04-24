const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const configPath = path.join(__dirname, '/config/config.js');
const config = require(configPath);
const glob = require('glob');
const nunjucks = require('nunjucks');

process.env.app_file = path.join(__dirname, '/app.js');
process.env.config_path = configPath;

app.set('config', config);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'nunjucks');
nunjucks.configure(config.views_path, {
  autoescape: true,
  noCache: true,
  express: app
});

module.exports = app;

/**
 * Get routes
 */
const routes = glob.sync(path.join(config.routes_path, '/*.js'));
routes.forEach((route) => {
	require(route);
});

const services = require(config.services_path);
services.errors();
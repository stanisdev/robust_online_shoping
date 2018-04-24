const express = require('express');
const router = express.Router();
const app = require(process.env.app_file);
const config = app.get('config');
const {wrapper} = require(config.services_path);

/**
 * Main url
 */
router.get('/', wrapper((req, res, next) => {
  res.render('main/index.html', {});
}));

app.use('/', router);

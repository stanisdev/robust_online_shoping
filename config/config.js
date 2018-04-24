const path = require('path');
const root_dir = path.dirname(__dirname);

module.exports = {
  root_dir,
  port: 7000,
  routes_path: path.join(root_dir, '/routes'),
  database_path: path.join(root_dir, '/database/models'),
  services_path: path.join(root_dir, '/services'),
  filters_path: path.join(root_dir, '/filters'),
  views_path: path.join(root_dir, '/views'),
  config_path: __dirname
};
const app = require(process.env.app_file);

module.exports = () => {

  /**
   * Page 404
   */
  app.use((req, res, next) => {
    res.send('Not found');
  });

  /**
   * Server error handler
   */
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.send('Server error');
  });

};

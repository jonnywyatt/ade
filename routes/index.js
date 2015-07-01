var Router = require('react-router'),
  React = require('react'),
  routes = require('../jsx/routes');

export default () => {
  app.use((req, res) => {
    Router.run(routes, req.path, (Root, state) => {
      res.send('<!DOCTYPE html>' + React.renderToString( <Root/> ));
    });
  });

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
}

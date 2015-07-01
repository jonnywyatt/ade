/*eslint-disable no-undef */

var React = require('react');
var Iso = require('iso');

class AltResolver {
  constructor () {
    this._toResolve = [];
  }

  resolve (promise, later) {
    later = later || false;
    if (process.env.BROWSER && !later) {
      return new Promise(promise);
    } else {
      this._toResolve.push(promise);
    }
  }

  mapPromises () {
    return this._toResolve.map((promise) => new Promise(promise));
  }

  render (Handler, alt, force) {
    if (process.env.BROWSER && !force) {
      logger.info('`altResolver.render` should not be used in browser, something went wrong');
      return null;
    }
    else {
      var content;

      React.renderToString(React.createElement(Handler, {alt: alt}));

      // Get the promises collected from the first rendering
      const promises = this.mapPromises();

      // Resolve all promises collected
      return Promise.all(promises)
        .then(function () {
          // Get the new content with promises resolved

          const app = React.renderToString(React.createElement(Handler, {alt: alt}));

          // Render the html with state in it
          content = {body: Iso.render(app, alt.takeSnapshot())};

          // return the content
          return content.body;
        });

    }
  }
}

module.exports = AltResolver;

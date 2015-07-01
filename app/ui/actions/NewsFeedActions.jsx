var request = require('request');

class NewsFeedActions {

  refreshFeed(config) {
    let self = this;
    return (resolve, reject) => {
      if (!config.endpoints || !config.cookies) {
        resolve();
        return;
      }

      // Feed can only be for yourself in this view
      const serviceSocialHub = config.endpoints.getFeed;
      const tesCookie = request.cookie('TESCookie=' + config.cookies.TESCookie);
      let jar = request.jar();
      jar.setCookie(tesCookie, serviceSocialHub);
      request.get({
        url: serviceSocialHub,
        jar: jar
      }, (err, result) => {
        if (err) {
          reject(err);
        }
        try {
          const body = JSON.parse(result.body);
          self.dispatch(body);
          resolve();
        } catch (e) {
          console.error('Error parsing JSON response from ' + serviceSocialHub);
        }
      });
    }
  }
}

module.exports = NewsFeedActions;

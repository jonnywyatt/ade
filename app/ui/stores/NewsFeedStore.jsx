
class NewsFeedStore {
  constructor () {
    this.bindAction(this.alt.actions.newsFeedActions.refreshFeed, this.onRefreshFeed);
  }

  onRefreshFeed(data) {
    return this.setState(data);
  }
}

module.exports = NewsFeedStore;

import Alt from 'alt';
import AltResolver from './altResolver.js';
import NewsFeedStore from './ui/stores/NewsFeedStore';
import NewsFeedActions from './ui/actions/NewsFeedActions';

class Extended extends Alt {

  constructor(config = {}) {
    super(config);

    this._resolver = new AltResolver();
    this.addActions('newsFeedActions', NewsFeedActions);
    this.addStore('newsFeedStore', NewsFeedStore);
  }

  resolve(result) {
    this._resolver.resolve(result);
  }

  render(handler) {
    return this._resolver.render(handler, this);
  }
}

module.exports = Extended;

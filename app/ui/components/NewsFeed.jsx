import React from 'react';
import _ from 'lodash';

class NewsFeed extends React.Component {

  constructor() {
    super();
    this.refreshFeed = this.refreshFeed.bind(this);
  }

  componentWillMount() {
    this.refreshFeed();
  }

  componentDidMount() {
    this.props.alt.stores.newsFeedStore.listen(this.onChange);
  }

  refreshFeed() {
    this.props.alt.resolve(this.props.alt.actions.newsFeedActions.refreshFeed(this.props.alt.stores.newsFeedStore.getState()));
  }

  btnRefreshHandler() {
    this.refreshFeed();
  }

  render() {
    let feed = this.props.alt.stores.newsFeedStore.getState().feed || [];
    let topItem = (feed.length && feed[0].isWelcome) ? <HomePageWelcome /> : '';

    return (
      <div className="feed-items">
        {topItem}
        {feed.map((item) => {

        })}
      </div>
    );
  }
}

export default NewsFeed;

import Alt from '../alt';
import NewsFeed from '../ui/components/NewsFeed';
import _ from 'lodash';

export default (req, res) => {
  let alt = new Alt();

  alt.bootstrap(JSON.stringify({
    newsFeedStore: {

    }
  }));

  alt.render(NewsFeed).then((content) => {
    res.render('index', {app: content});
  });
};

import Alt from '../alt';
import Component from '../ui/components/Component/Component';
import _ from 'lodash';

export default (req, res) => {
  let alt = new Alt();

  alt.bootstrap(JSON.stringify({
    newsFeedStore: {

    }
  }));

  alt.render(Component).then((content) => {
    res.render('index', {app: content});
  });
};

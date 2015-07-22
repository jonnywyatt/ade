import Iso from 'iso';
import React from 'react';
import Alt from '../app/alt';

process.env.BROWSER = true;
Iso.bootstrap((state) => {
  let alt = new Alt();
  alt.bootstrap(state);
  React.render(React.createElement(NewsFeed, {alt: alt}), document.querySelector('.js-newsfeed'));
});

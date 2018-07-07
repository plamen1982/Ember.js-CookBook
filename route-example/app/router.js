import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('papers', {path: '/about-papers-page/'});
  this.route('staplers', {path: '/about-papers-page'});
  this.route('components/not-found', {path: '/*wildcard'})
});

export default Router;

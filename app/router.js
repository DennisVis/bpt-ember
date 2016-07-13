import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('overview', {path: '/'});
  this.route('detail', {path: '/:id'});
  this.route('create', {path: '/new'});
  this.route('edit', {path: '/:id/edit'});
});

export default Router;

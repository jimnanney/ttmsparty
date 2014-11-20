import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slides', function() { });
  this.resource('slide', { path: 'slides/:slide_id' }, function() { });
});

export default Router;

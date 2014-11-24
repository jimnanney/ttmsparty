import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slides', function() { });
  this.resource('slide', { path: 'slides/:slide_id' }, function() { });
  this.resource('clues', function() {
    this.route('show', { path: '/:id' });
    this.route('edit', { path: '/:id/edit' });
    this.route('delete', { path: '/:id/delete' });
    this.route('new');
  });
  this.resource('trivia', { path: '/trivia' }, function() {
  } );
});

export default Router;

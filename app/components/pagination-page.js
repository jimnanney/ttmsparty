import Ember from 'ember';

export default Ember.Component.extend({
  isCurrent: function() {
    return this.get('currentPage') === this.get('page');
  }.property('currentPage', 'page'),
  tagName: 'li',
  classNameBindings: ['isCurrent:active'],
  actions: {
    pageClicked: function() {
      this.sendAction('action', this.get('page'));
    }
  }
});

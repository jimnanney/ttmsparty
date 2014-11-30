import Ember from 'ember';

export default Ember.Component.extend({
  nextPage: function() {
    return Math.min(this.get('pages'), this.get('page')+1);
  }.property('page', 'pages'),

  prevPage: function() {
    return Math.max(this.get('page') - 1, 1);
  }.property('page'),

  hasPrevious: function() {
    return this.get('page') > 1;
  }.property('page'),

  hasNext: function() {
    return this.get('page') < this.get('pages');
  }.property('page'),

  showPagination: Ember.computed.gt('pages', 1),
  lastPage: Ember.computed.alias('pages'),

  visiblePages: function() {
    var visible = [];
    var last;
    var i;
    var pages = this.get('pages');
    var page = this.get('page');
    
    var limit = (pages > 3) ? 3 : pages;

    var finish = function(start, limit) {
      return start + limit -1;
    }
    var start = page - parseInt(limit / 2);
    if (finish(start, limit) > pages) {
      start = pages - limit + 1;
    }
    if (start < 1) {
      start = 1;
    } 
    last = finish(start, limit)+1;
    for(i=start;i<last;i++) {
      visible.push(i);
    }
    return visible;
  }.property('page', 'pages'),

  showBeforeEllipsis: function() {
    return this.get('visiblePages.firstObject') > 2;
  }.property('visiblePages.[]'),

  showAfterEllipsis: function() {
    return Math.abs(this.get('lastPage') - this.get('visiblePages.lastObject')) > 2;
  }.property('visiblePages.[]', 'lastPage')
});

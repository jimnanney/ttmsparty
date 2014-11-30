import Ember from "ember";

export default Ember.ArrayController.extend({
  queryParams: [ 'category', 'sort', 'page', 'limit', 'q'],
  limit: 10,
  currentPage: 1,
  actions: {
    deleteRecord: function(record) {
      record.destroyRecord();
    }
  },
  page: function(key, value) {
    if (value!== this.get('currentPage')) {
      var val = parseInt(value) || 1;
      this.set('currentPage', val);
    }
    return this.get('currentPage');
  }.property('filteredContent.[]'),
  q: null,
  category: null,
  sort: 'question',

  sortProperties: function() {
    return [this.get('sort')];
  }.property('sort'),

  sortAscending: true,

  first: function() {
    return this.get('start')+1;
  }.property('start'),

  last: function() {
    return Math.min(this.get('end'), this.get('filteredContent.length'));
  }.property('end', 'filteredContent.length'),
       
  start: function() {
    var page = this.get('page');
    var limit = this.get('limit');
    return (page - 1) * limit;
  }.property('page', 'limit'),

  end: function() {
    var page = this.get('page');
    var limit = this.get('limit');
    return page * limit;
  }.property('page', 'limit'),

  total: function() {
    return parseInt(this.get('filteredContent.length'));
  }.property('filteredContent.[]','limit', 'filter', 'q'),

  filteredContent: function() {
    var category = this.get('category');
    var filtered = this.get('arrangedContent');
    var q = this.get('q');
    var exp;
    if (category) {
      filtered = filtered.filterBy('category', category);
    }
    if (q!==null && q !== '') {
      try {
        exp = new RegExp(q, "i");
      } catch (e) {
        exp = '';
      }
      filtered = filtered.filter(function(record) {
        return record.get('question').match(exp) || record.get('answer').match(exp) || record.get('category').match(exp);
      });
    }
    return filtered;
  }.property('arrangedContent.[]', 'category', 'q'),

  pages: function() {
    var totalPages = parseInt(this.get('filteredContent').length / this.get('limit'));
    if (this.get('filteredContent').length % this.get('limit') > 0) {
      totalPages++;
    }
    return totalPages;
  }.property('limit','filteredContent.[]','page'),
  paginatedContent: function() {
    return this.get('filteredContent').slice(this.get('start'), this.get('end'));
  }.property('filteredContent.[]', 'limit', 'filter', 'q', 'sort', 'page')
});


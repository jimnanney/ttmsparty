import Ember from "ember";

export default Ember.ObjectController.extend({
  clues: function() {
    return this.store.findAll('clue');
  }.property()
});


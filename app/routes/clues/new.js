import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('clue');
  },
  actions: {
    saveClue: function() {
      var model = this.modelFor(this.routeName);
      var that = this;
      model.save().then(function() {
        that.transitionTo('clues.index');
      });
    }
  },
  deactivate: function() {
    var model = this.modelFor(this.routeName);
    model.rollback();
  }
});


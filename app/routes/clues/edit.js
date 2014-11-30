import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('clue', params.id);
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
  setupController: function(controller, model) {
    this._super(controller, model);
    //var cnt = this.controllerFor(this.routeName);
    //controller.setProperties({isNew: false});
  },
  deactivate: function() {
    var model = this.modelFor(this.routeName);
    model.rollback();
  }
});

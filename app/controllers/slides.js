import Ember from 'ember';

export default Ember.ArrayController.extend({
  started: false,
  createBlankSlide: function() {
    this.set('slide', Ember.Object.create());
  }.on('init'),
  actions: {
    saveSlide: function() {
      var newSlide = this.store.createRecord('slide', {
        image: this.get('slide.image')
      });
      newSlide.save();
      return false;
    },
    startAnimation: function() {
      this.toggleProperty('started');
    }
  }
});

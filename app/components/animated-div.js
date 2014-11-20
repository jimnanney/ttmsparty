import Ember from 'ember';

export default Ember.Component.extend({
  animations: ['bounceInLeft', 3000, 'bounceOutRight'],
  inAnimationType: 'bounceInLeft',
  outAnimationType: 'bounceOutRight',
  beginInAnimation: function() {
    this.animate();
  }.on('didInsertElement'),
  scheduleAnimation: function() {
    var that = this;
    Ember.run.later(that, 'beginOutAnimation', 3000);
  },
  setupStage: function() {
  },
  current: null,
  animate: function() {
    var that = this;
    var animations = this.get("animations");
    var previous = this.get('current');
    var next = animations.shift();
    this.set('current', next);
    var scheduledJob;
    Ember.debug("Animate: " + next + " : " + this.get('current'));
    if (typeof next === "undefined") {
      return false;
    }
    that.$().removeClass('animated ' + previous);
    if (typeof next === "number") {
      Ember.debug("Pausing");
      Ember.run.later(that, 'animate', next);
    } else {
      scheduledJob = function() { 
        var that = this;
        Ember.run.later(that, 'animate', 1000);
      };
      this.$().addClass("animated " + next );
      this.$().one('webKitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', scheduledJob);// Ember.run.bind(this, scheduledJob));
    }
  }

});

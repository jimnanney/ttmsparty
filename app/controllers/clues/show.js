// import Ember from 'ember';
// 
// export default Ember.ObjectController.extend({
//   workday: "Tuesday",
//   onRender: function() {
//     Ember.debug("Hello");
//     Ember.run.scheduleOnce('afterRender', this, 'animateIn');
//   }.on('didInsertElement'),
//   scheduleNext: function(operation) {
//     console.log("waiting");
//     if (operation=== "wait") {
//       Ember.run.later(this, this.animateOut, 1000);
//     }
//   },
//   animateIn: function() {
//     console.log("Animate In");
//     this.$().addClass("animated bounceInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', Ember.run.bind(this, this.scheduleNext, "wait"));
//   },
//        animateOut: function() {
//          console.log("animate out");
//          this.$().addClass("animated bounceOutRight");
//        }
// });

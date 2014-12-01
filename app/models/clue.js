import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  hint: DS.attr('string'),
  category: DS.attr('string'),
  answer: DS.attr('string')
});

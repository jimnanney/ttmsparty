import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: Trivia', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it displays a jeopardy style board with 5 categories at the top', function() {
  visit('/trivia');

  andThen(function() {
    equal(currentPath(), 'trivia.index');
    ok(find('.gameboard').length, 'page has gameboard');
    equal(find('.gameboard .category').length, 5);
  });
});

test('it displays sets of values under each category', function() {
  visit('trivia');

  andThen(function() {
    equal(find('.category-1.clue').length, 5);
  });
});
/*
test('it displays a key to enter to select each value', function() {
  expect(0);
});

test('it hides the value of the previous played clues', function() {
  expect(0);
});

test('it accepts a keystroke to return to aggregator mode', function() {
  expect(0);
});
*/


import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gameboard'],
  model: null,
  clues: Ember.A([]),
  rows: function() {
    return this.get('gameState').rows;
  }.property('gameState.rows'),
  categories: function() {
    return this.get('gameState').categories;
  }.property('gameState.categories'),
  gameState: function() {
    var gameState = Ember.Object.create({
      categories: ['Movies', 'Sports', 'Risky Business', 'Hobbies', 'Hardships'],
      rows: [
        { 
          dollarValue: '$100',
          clues: [
            {
              valueLabel: '$100',
              question: 'Who starred in Slumdog Millionaire?',
              answer: 'No one of note',
              hint: null,
              category: 'Movies',
              revealed: false
            },
            {
              valueLabel: '$100',
              question: 'What city do the Saints play in?',
              answer: 'Wherever they have a game scheduled',
              category: 'Sports',
              revealed: false
            },
            {
              valueLabel: '$100',
              question: 'What profession was Tom Cruise when Risky Business was made?',
              answer: 'Actor',
              hint: 'Not telling',
              category: 'Risky Business',
              revealed: false
            },
            {
              valueLabel: '$100',
              question: 'What hobbies does Jim have?',
              answer: 'hobbies? No time with all the programming',
              hint: 'Not telling',
              category: 'Hobbies',
              revealed: false
            },
            {
              valueLabel: '$100',
              question: 'What kind of ship is the Nimitz?',
              answer: 'Carrier',
              hint: 'Not telling',
              category: 'Hardships',
              revealed: false
            }
          ]
        },
        { 
          dollarValue: '$200',
          clues: [
            {
              valueLabel: '$200',
              question: 'What movie has the kid who sees dead people?',
              answer: 'The Sixth Sense',
              hint: 'Not telling',
              category: 'Movies',
              revealed: false
            },
            {
              valueLabel: '$200',
              question: 'Who is the most popular NASCAR driver?',
              answer: 'Dale Earnhardt Jr.',
              hint: 'Not telling',
              category: 'Sports',
              revealed: false
            },
            {
              valueLabel: '$200',
              question: 'Why does Tom Cruise need to raise money in Risky Business?',
              answer: 'He has to buy back a Faberge Egg',
              hint: 'Not telling',
              category: 'Risky Business',
              revealed: false
            },
            {
              valueLabel: '$200',
              question: 'What Hobby supply store is not closed on Sundays?',
              answer: "Michael's",
              hint: 'Not telling',
              category: 'Hobbies',
              revealed: false
            },
            {
              valueLabel: '$200',
              question: 'What kind of ship is the Enterprise?',
              answer: 'Spaceship',
              hint: 'Not telling',
              category: 'Hardships',
              revealed: false
            }
          ]
        }
      ]
    });
    return gameState;
  }.property(),
  selectedClue: null,
  applyAnimation: function(selector, animation, hideOnComplete) {
    this.$(selector).addClass('animated displayed ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      Ember.run.bind(this, function() {
        if (hideOnComplete) {
          this.$(selector).removeClass('animated displayed ' + animation);
        } else {
          this.$(selector).removeClass('animated ' + animation);
        }
      }));
  },
  keyUp: function(e)
  {
    console.log(e);
  },
  actions: {
    showAnswer: function() {
      this.$('.question, .hint').removeClass('displayed');
      this.applyAnimation('.answer', 'flipInX');
      return true;
    },
    showHint: function() {
      this.$('.question').removeClass('displayed');
      this.applyAnimation('.hint', 'flipInX');
      return true;
    },
    hideQuestionModal: function() {
      this.$('.answer, .hint').removeClass('displayed');
      this.applyAnimation('.question-modal', 'zoomOut', true);
      this.set('selectedClue.revealed', true);
      return true;
    },
    showQuestion: function(clue) {
      if (clue.revealed) { return; }
      this.set('selectedClue', clue);
      this.applyAnimation('.question-modal, .question', 'zoomIn');
      return true;
    }
  },
  // Must have a tabindex and have focus to receive  keyboard events
  didInsertElement: function(){
     this.$().attr('tabindex',0);
     this.$().focus();
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions').then(questions => questions.sortBy('id'));
  }
});

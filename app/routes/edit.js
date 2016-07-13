import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('questions', params.id);
  },

  actions: {
    save(question) {
      question.save().then(() => this.transitionTo('detail', question));
    }
  }
});

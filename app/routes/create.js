import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('questions', {
      labels: {}
    });
  },

  actions: {
    save(question) {
      question.save().then(() => this.transitionTo('overview'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update() {
      this.get('update-func')(this.get('lang'), this.get('value'));
    },

    remove() {
      this.get('remove-func')(this.get('lang'));
    }
  }
});

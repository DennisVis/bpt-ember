import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this.set('update-func', (lang, newValue) => {
      this.set('labels.' + lang, newValue);
      this.rerender();
    });

    this.set('remove-func', lang => {
      const labels = this.get('labels');
      delete labels[lang];
      this.rerender();
    });

    this._super();
  },

  actions: {
    add(newLang, newValue) {
      const labels = this.get('labels');
      labels[newLang] = newValue;
      this.set('newLang', '');
      this.set('newValue', '');
      this.rerender();
    }
  }
});

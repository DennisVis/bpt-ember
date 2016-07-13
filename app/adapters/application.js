import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
  methodForRequest({ requestType }) {
    if (requestType === 'updateRecord') {
      return 'PUT';
    }

    return this._super(...arguments);
  }
});

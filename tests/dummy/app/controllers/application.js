import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    colorChanged: function (color) {
      window.alert(color);
    }
  }
});

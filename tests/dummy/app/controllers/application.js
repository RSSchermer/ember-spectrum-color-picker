import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    colorChanged: function (color) {
      window.alert(color);
    }
  }
});

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/spectrum/spectrum.js');
    app.import('bower_components/spectrum/spectrum.css');
  }
};

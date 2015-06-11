/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('bower_components/spectrum/spectrum.js');
    app.import('bower_components/spectrum/spectrum.css');
  }
};

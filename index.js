/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included(app);
    if (process.env.EMBER_CLI_FASTBOOT !== 'true') {
      app.import('bower_components/spectrum/spectrum.js');
    }
    app.import('bower_components/spectrum/spectrum.css');
  }
};

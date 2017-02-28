/* jshint node: true */
'use strict';

var path = require('path');

var defaults = {
  assetPath: 'bower_components/spectrum'
};

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included(app);

    var options = (app && app.project.config(app.env)['emberSpectrumColorPicker']) || {};

    var assetPath = options.assetPath || defaults.assetPath;

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(path.join(assetPath, 'spectrum.js'));
    }

    app.import(path.join(assetPath, 'spectrum.css'));
  }
};

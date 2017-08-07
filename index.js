/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

var defaults = {
  assetPath: 'vendor'
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
  },

  treeForVendor(vendorTree) {
    var spectrumTree = new Funnel(path.dirname(require.resolve('spectrum-colorpicker')), {
      files: ['spectrum.js', 'spectrum.css']
    });

    return vendorTree ? mergeTrees([vendorTree, spectrumTree]) : spectrumTree;
  }
};

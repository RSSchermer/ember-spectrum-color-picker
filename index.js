/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var map = require('broccoli-stew').map;

var defaults = {
  assetPath: 'vendor'
};

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included(app);

    var options = (app && app.project.config(app.env)['emberSpectrumColorPicker']) || {};

    var assetPath = options.assetPath || defaults.assetPath;

    app.import(path.join(assetPath, 'spectrum.js'));

    if (options.includeStyles) {
      app.import(path.join(assetPath, 'spectrum.css'));
    }
  },

  treeForVendor(vendorTree) {
    var spectrumTree = new Funnel(path.dirname(require.resolve('spectrum-colorpicker')), {
      files: ['spectrum.js', 'spectrum.css']
    });

    spectrumTree = map(spectrumTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return vendorTree ? mergeTrees([vendorTree, spectrumTree]) : spectrumTree;
  }
};

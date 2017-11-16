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
    var dir = path.dirname(require.resolve('spectrum-colorpicker'));
    var spectrumJsTree = new Funnel(dir, {
      files: ['spectrum.js']
    });
    var spectrumCssTree = new Funnel(dir, {
      files: ['spectrum.css']
    });

    spectrumJsTree = map(spectrumJsTree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    var spectrumTree = mergeTrees([spectrumJsTree, spectrumCssTree]);

    return vendorTree ? mergeTrees([vendorTree, spectrumTree]) : spectrumTree;
  }
};

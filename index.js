'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel'); // eslint-disable-line
var mergeTrees = require('broccoli-merge-trees'); // eslint-disable-line
var map = require('broccoli-stew').map; // eslint-disable-line

var defaults = {
  assetPath: 'vendor'
};

module.exports = {
  name: 'ember-spectrum-color-picker',

  included: function(app) {
    this._super.included(app);

    var target = this._findApp(app);
    var options = (target && target.project.config(target.env)['emberSpectrumColorPicker']) || {};

    var assetPath = options.assetPath || defaults.assetPath;

    target.import(path.join(assetPath, 'spectrum.js'));

    if (options.includeStyles) {
      target.import(path.join(assetPath, 'spectrum.css'));
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
  },

  _findApp: function(hostApp) {
    var app = this.app || hostApp;
    var parent = this.parent;

    while (parent.parent) {
      if (parent.app) {
        app = parent.app;
        break;
      }

      parent = parent.parent;
    }
    return app;
  },
};

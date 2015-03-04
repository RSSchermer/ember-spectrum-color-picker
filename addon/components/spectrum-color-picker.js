import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'spectrum-color-picker',

  tagName: 'input',

  color: null,

  flatMode: false,

  allowEmpty: false,

  disabled: false,

  showInput: false,

  showAlpha: false,

  showInitial: false,

  showButtons: true,

  showPalette: false,

  showPaletteOnly: false,

  palette: [],

  togglePaletteOnly: false,

  showSelectionPalette: false,

  hideAfterPaletteSelect: false,

  preferredFormat: null,

  moveFiresChange: false,

  clickoutFiresChange: false,

  chooseText: 'Choose',

  cancelText: 'Cancel',

  togglePaletteMoreText: 'More',

  togglePaletteLessText: 'Less',

  appendTo: 'body',

  localStorageKey: 'spectrum-color-picker',

  didInsertElement: function() {
    var opts = {
      color: this.get('color'),
      flat: this.get('flatMode'),
      allowEmpty: this.get('allowEmpty'),
      disabled: this.get('disabled'),
      showInput: this.get('showInput'),
      showAlpha: this.get('showAlpha'),
      showInitial: this.get('showInitial'),
      showButtons: this.get('showButtons'),
      showPalette: this.get('showPalette'),
      showPaletteOnly: this.get('showPaletteOnly'),
      palette: (typeof(this.get('palette')) === 'string') ? JSON.parse(this.get('palette')) : this.get('palette'),
      togglePaletteOnly: this.get('togglePaletteOnly'),
      showSelectionPalette: this.get('showSelectionPalette'),
      hideAfterPaletteSelect: this.get('hideAfterPaletteSelect'),
      preferredFormat: this.get('preferredFormat'),
      clickoutFiresChange: this.get('clickoutFiresChange'),
      chooseText: this.get('chooseText'),
      cancelText: this.get('cancelText'),
      togglePaletteMoreText: this.get('togglePaletteMoreText'),
      togglePaletteLessText: this.get('togglePaletteLessText'),
      appendTo: this.get('appendTo'),
      localStorageKey: this.get('localStorageKey')
    };

    var self = this;
    var updateFunction = function(newColor) {
      self.set('color', newColor.toString());
    };

    if (this.get('moveFiresChange')) {
      opts.move = updateFunction;
    } else {
      opts.change = updateFunction;
    }

    this.$().spectrum(opts);
  },

  updatePicker: function() {
    this.$().spectrum("set", this.get("color"));
  }.observes("color")
});

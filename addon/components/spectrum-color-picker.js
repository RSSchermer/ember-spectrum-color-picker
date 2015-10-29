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

  updatePicker: Ember.observer('color', function () {
    this.$().spectrum('set', this.get('color'));
  }),

  updateDisabled: Ember.observer('disabled', function () {
    this.$().spectrum(this.get('disabled') ? 'disable' : 'enable');
  }),

  didInsertElement() {
    let palette = this.get('palette');
    let opts = {
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
      palette: (typeof(palette) === 'string') ? JSON.parse(palette) : palette,
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
    let self = this;
    let updateFunction = function (newColor) {
      let color = newColor.toString()
      self.sendAction('on-change', color)
      self.set('color', color);
    };

    if (this.get('moveFiresChange')) {
      opts.move = updateFunction;
    } else {
      opts.change = updateFunction;
    }

    this.$().spectrum(opts);
  }
});

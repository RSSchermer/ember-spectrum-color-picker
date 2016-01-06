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
      let color = newColor ? newColor.toString() : null;
      let onChange = self.get('onChange');

      self.set('color', color);

      if (onChange) {
        onChange(color);
      }
    };

    opts.change = updateFunction;

    if (this.get('moveFiresChange')) {
      opts.move = updateFunction;
    }

    // Move Event
    let onMove = self.get('onMove');
    if (onMove) {
        opts.move = function (newColor) {
          onMove(newColor ? newColor.toString() : null);
        };
    }

    // Hide Event
    let onHide = self.get('onHide');
    if (onHide) {
        opts.hide = function (newColor) {
          onHide(newColor ? newColor.toString() : null);
        };
    }

    // Show Event
    let onShow = self.get('onShow');
    if (onShow) {
        opts.show = function (newColor) {
          onShow(newColor ? newColor.toString() : null);
        };
    }

    this.$().spectrum(opts);
  }
});

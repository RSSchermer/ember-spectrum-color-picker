import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery'

export default Component.extend({
  classNames: 'spectrum-color-picker',

  containerClassName: 'spectrum-color-picker-container',

  replacerClassName: 'spectrum-color-picker-replacer',

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

  palette: [], // eslint-disable-line

  togglePaletteOnly: false,

  showSelectionPalette: false,

  maxSelectionSize: 7,

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

  // eslint-disable-next-line
  updatePalette: observer('palette', function () {
    $(this.element).spectrum('option', 'palette', this.get('palette'));
  }),

  // eslint-disable-next-line
  updatePicker: observer('color', function () {
    $(this.element).spectrum('set', this.get('color'));
  }),

  // eslint-disable-next-line
  updateDisabled: observer('disabled', function () {
    $(this.element).spectrum(this.get('disabled') ? 'disable' : 'enable');
  }),

  getOptions() {
    let palette = this.get('palette');
    return {
      color: this.get('color'),
      flat: this.get('flatMode'),
      containerClassName: this.get('containerClassName'),
      replacerClassName: this.get('replacerClassName'),
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
      maxSelectionSize: this.get('maxSelectionSize'),
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
  },

  setCallbacks(opts) {
    let self = this;
    let updateFunction = function (newColor) {
      let color = newColor ? newColor.toString() : null;
      let onChange = self.get('onChange');

      if (!self.isDestroyed) {
        self.set('color', color);
      }

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

    return opts;
  },

  initSpectrum(opts) {
    $(this.element).spectrum(opts);
  },

  didInsertElement() {
    let opts = this.getOptions();
    this.setCallbacks(opts);
    this.initSpectrum(opts);
  },

  willDestroyElement() {
    $(this.element).spectrum('destroy');
  }
});

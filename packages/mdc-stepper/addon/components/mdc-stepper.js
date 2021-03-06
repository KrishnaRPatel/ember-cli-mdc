import Component from '@ember/component';
import layout from '../templates/components/mdc-stepper';

import { MDCStepper } from '../-lib';

import { isPresent } from '@ember/utils';

function noOp () {}

export default Component.extend({
  layout,

  tagName: 'ul',

  classNames: ['mdc-stepper'],

  classNameBindings: [
    'linear:mdc-stepper--linear',
    'horizontal:mdc-stepper--horizontal',
    'feedback:mdc-stepper--feedback',
    'disabled:mdc-stepper--disabled'
  ],

  _stepper: null,

  linear: false,

  horizontal: false,

  feedback: false,

  completeEventListener_: null,

  init () {
    this._super (...arguments);

    this.completeEventListener_ = this.didComplete.bind (this);
  },

  didInsertElement () {
    this._super (...arguments);

    this._stepper = new MDCStepper (this.element);
    this._stepper.listen ('MDCStepper:complete', this.completeEventListener_);

    // Associate the EmberJS step components with the MDC step components. This
    // allows the EmberJS components to directly manipulate the MDC component.
    let steps = this._stepper.steps;
    let components = this.childViews;

    for (let i = 0, length = steps.length; i < length; ++ i)
      components[i].step = steps[i];
  },

  willDestroyElement () {
    this._super (...arguments);

    this._stepper.unlisten ('MDCStepper:complete', this.completeEventListener_);
    this._stepper.destroy ();
  },

  didComplete () {
    this._super (...arguments);

    this.getWithDefault ('complete', noOp) ();
  }
});

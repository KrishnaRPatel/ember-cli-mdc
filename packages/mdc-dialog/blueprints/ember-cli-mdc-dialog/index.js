/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/dialog', target: '3.2.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-button'}
  ]
});

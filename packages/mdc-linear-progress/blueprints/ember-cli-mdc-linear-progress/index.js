/* eslint-env node */

const { Blueprint } = require ('ember-cli-blueprint-helpers');

module.exports = Blueprint.extend ({
  packages: [
    {name: '@material/linear-progress', target: '3.2.0'}
  ],

  addons: [
    {name: 'ember-cli-mdc-animation', target: '^1.0.0'},
    {name: 'ember-cli-mdc-base', target: '^1.0.0'},
    {name: 'ember-cli-mdc-theme', target: '^1.0.0'}
  ]
});

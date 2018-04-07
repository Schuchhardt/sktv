// Requerir/importar aquí las librerías (fonts, css, js)
// de uso común en todo el proyecto.

module.exports = function() {
  /* Styles */
  require('bootstrap/dist/css/bootstrap.css');
  require('sweetalert/dist/sweetalert.css');
  require('angular-carousel/dist/angular-carousel.min.css');
  require('../css/main.scss');
  require('../css/mapsvg.css');
  require('angucomplete-alt/angucomplete-alt.css');
  /* JS */
  global.$ = global.jQuery = require('jquery');
  require('angular');
  require('angular-i18n/angular-locale_es-cl.js');
  require('angular-touch');
  require('angular-carousel');
  require('ngstorage');
  require('angular-sanitize');
  require('angular-ui-router');
  require('angular-ui-bootstrap');
  require('angular-ui-select/select.min.js');
  require('sweetalert');
  require('angucomplete-alt');

  require('lodash');
  require('ngSweetAlert');
  global.Raven = require('raven-js/dist/raven.js');
  global.Raven.Plugins = {};
  global.Raven.Plugins.Angular = require('raven-js/plugins/angular.js');

  // require('angulartics');
  // require('angulartics-google-analytics');
};

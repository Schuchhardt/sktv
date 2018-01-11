require('./vendor')();

angular.module('SKTV', [
  'ngTouch',
  'ui.router',
  'ui.bootstrap',
  'ui.select',
  "oitozero.ngSweetAlert",
  'angular-carousel',
  require('./config').name,
  require('./controllers').name,
  require('./directives').name,
  require('./services').name,
])

.constant('SETTINGS', {
  development: (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") ? true : false,
  apiHost: "http://bf-webservice.herokuapp.com/api/",
})
;

angular.element(document).ready(() => {
  angular.bootstrap(document, ['SKTV'], {});
});

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register('/sw.js')
//            .then(function() { console.log('SW Registered'); });
// }


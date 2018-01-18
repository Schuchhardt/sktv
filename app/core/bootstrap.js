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
  mapKey: 'AIzaSyDKKCkwKT3rrJB0FsDQJKuGjuweKe4cdN0'
})

.run(['$rootScope', function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}])
.config(function($sceDelegateProvider) {


  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    '*://www.youtube.com/**',
    '*://www.google.com/**'
  ]);

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


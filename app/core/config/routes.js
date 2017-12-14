export default [ "$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      template: require('../modules/home/home.jade'),
    })
    .state('noticias', {
      url: '/noticias',
      controller: 'HomeCtrl',
      template: require('../modules/home/noticias.jade'),
    })
    .state('galeria', {
      url: '/galeria',
      controller: 'HomeCtrl',
      template: require('../modules/home/galeria.jade'),
    })
    .state('videoteca', {
      url: '/videoteca',
      controller: 'HomeCtrl',
      template: require('../modules/home/videoteca.jade'),
    })
    .state('agentes', {
      url: '/agentes',
      controller: 'HomeCtrl',
      template: require('../modules/home/agentes.jade'),
    })
    .state('mapa', {
      url: '/mapa',
      controller: 'HomeCtrl',
      template: require('../modules/home/mapa.jade'),
    })
    ;
}];

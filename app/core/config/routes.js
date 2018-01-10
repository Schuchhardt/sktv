export default [ "$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      template: require('../modules/home/home.jade'),
    })
    .state('novedades', {
      url: '/novedades',
      controller: 'HomeCtrl',
      template: require('../modules/home/novedades.jade'),
    })
    .state('galeria', {
      url: '/galeria',
      controller: 'GaleriaCtrl',
      template: require('../modules/galeria/galeria.jade'),
    })
    .state('detalle-galeria', {
      url: '/galeria/:galleryId',
      controller: 'GaleriaCtrl',
      template: require('../modules/galeria/detalle.jade'),
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

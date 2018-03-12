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
      controller: 'PostCtrl',
      template: require('../modules/home/novedades.jade'),
    })
    .state('post', {
      url: '/p/:postId',
      controller: 'PostCtrl',
      template: require('../modules/home/post.jade'),
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
      controller: 'AgentCtrl',
      template: require('../modules/agentes/agentes.jade'),
    })
    .state('agentes-list', {
      url: '/agentes/:agentType',
      controller: 'AgentCtrl',
      template: require('../modules/agentes/agentes-list.jade'),
    })
    .state('agentes-detail', {
      url: '/agentes/:agentType/:agentId',
      controller: 'AgentCtrl',
      template: require('../modules/agentes/agentes-detail.jade'),
    })
    .state('mapa', {
      url: '/mapa',
      controller: 'MapaCtrl',
      template: require('../modules/mapa/mapa.jade'),
    })
    .state('skateparks-region', {
      url: '/skateparks/:regionId',
      controller: 'MapaCtrl',
      template: require('../modules/mapa/skatepark-list.jade'),
    })
    .state('skatepark-detail', {
      url: '/skateparks/:regionId/:skateparkId',
      controller: 'MapaCtrl',
      template: require('../modules/mapa/skatepark-detail.jade'),
    })
    .state('about', {
      url: '/about',
      controller: 'HomeCtrl',
      template: require('../modules/home/about.jade'),
    })
    ;
}];

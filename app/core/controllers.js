export default angular.module('SKTV.controllers', [])
    .controller('HomeCtrl', require('./modules/home/home'))
    .controller('LayoutController', require('./modules/layout/layout'))
    .controller('MapaCtrl', require('./modules/mapa/mapa'))
    .controller('GaleriaCtrl', require('./modules/galeria/galeria'))
    .controller('PostCtrl', require('./modules/home/post'))
    .controller('AgentCtrl', require('./modules/agentes/agent'))
    .controller('SliderPhotosCtrl', require('./modules/galeria/slider-photos'))
    ;

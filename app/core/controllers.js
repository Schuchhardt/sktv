export default angular.module('SKTV.controllers', [])
    .controller('HomeCtrl', require('./modules/home/home'))
    .controller('GaleriaCtrl', require('./modules/galeria/galeria'))
    .controller('PostCtrl', require('./modules/home/post'))
    .controller('AgentCtrl', require('./modules/home/agent'))
    .controller('SliderPhotosCtrl', require('./modules/galeria/slider-photos'))
    ;

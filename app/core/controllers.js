export default angular.module('SKTV.controllers', [])
    .controller('HomeCtrl', require('./modules/home/home'))
    .controller('GaleriaCtrl', require('./modules/galeria/galeria'))
    .controller('SliderPhotosCtrl', require('./modules/galeria/slider-photos'))
    ;
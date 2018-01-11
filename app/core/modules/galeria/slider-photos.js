export default class SliderPhotosCtrl {
  /* @ngInject */
  constructor($scope, $uibModalInstance, $sce, $timeout, currentImage, currentEvent) {
    console.info("sliderPhotosCtrl inits");
    $scope.currentSlide = _.indexOf(currentEvent.all_photos, currentImage);
    $scope.currentEvent = currentEvent;

    $scope.close = function () {
      $uibModalInstance.dismiss();
    };

  }
}

export default class SliderPhotosCtrl {
  /* @ngInject */
  constructor($scope, $uibModalInstance, $sce, $timeout, $window, currentImage, currentEvent) {
    $scope.currentSlide = _.indexOf(currentEvent.all_photos, currentImage, currentEvent.offseted ? 7 : 0);
    $scope.currentEvent = currentEvent;

    $scope.close = function () {
      $uibModalInstance.dismiss();
    };

    $scope.download = function (photo) {
    	$window.open(photo.photo_url);
    };

  }
}

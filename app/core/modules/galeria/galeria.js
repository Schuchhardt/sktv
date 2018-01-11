export default class GaleriaCtrl {
  /* @ngInject */
  constructor($scope, $state, $stateParams, $uibModal, apiService) {

    const loadMainGallery = () => {
      apiService.loadMainGallery().then( (response) => {
        console.log(response);
        $scope.events = response.events;
      });
    };

    const loadGallery = (galleryId) =>{
      apiService.loadGallery(galleryId).then( (response) => {
        console.log(response);
        $scope.currentEvent = response.event;
      });
    };

    $scope.goToGalleryDetail = (event) =>{
      $state.go('detalle-galeria', {galleryId: event.id});
    };

    $scope.getBgUrl = (photo) => {
      return {'background-image': 'url(' + photo + ');'};
    };

    $scope.showSlider = (photo) => {
      $uibModal.open({
        animation: false,
        templateUrl: 'sliderPhotos',
        controller: 'SliderPhotosCtrl',
        size: "lg",
        resolve: {
          currentImage: () => {
            return photo;
          },
          currentEvent: () =>{
            return $scope.currentEvent;
          }
        }
      });
    };

    if ($state.current.name === 'galeria') {
      loadMainGallery();
    } else {
      loadGallery($stateParams.galleryId);
    }

  }
}

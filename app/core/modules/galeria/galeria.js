export default class GaleriaCtrl {
  /* @ngInject */
  constructor($scope, $state, $stateParams, $uibModal, apiService) {
    let page = 1;

    const loadMainGallery = () => {
      apiService.loadMainGallery().then( (response) => {
        $scope.events = response.events;
      });
    };

    const loadGallery = (galleryId) =>{
      apiService.loadGallery(galleryId).then( (response) => {
        $scope.currentEvent = response.event;
        $scope.eventPhotos = response.event.all_photos;
      });
    };

    const loadGalleryPhotos = (p) => {
      apiService.loadGalleryPhotos($stateParams.galleryId, p).then((response) => {
        $scope.eventPhotos.push(response.photos);
        $scope.eventPhotos = _.uniq(_.flatten($scope.eventPhotos));
        if (response.photos.length === 0) $scope.thereIsMorePhotos = false;
      });
    };

    $scope.thereIsMorePhotos = true;

    $scope.loadMorePhotos = () =>{
      page += 1;
      loadGalleryPhotos(page);
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

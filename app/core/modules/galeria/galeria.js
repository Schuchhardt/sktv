export default class GaleriaCtrl {
  /* @ngInject */
  constructor($scope, $state, $stateParams, apiService) {

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

    if ($state.current.name === 'galeria') {
      loadMainGallery();
    } else {
      loadGallery($stateParams.galleryId);
    }

  }
}

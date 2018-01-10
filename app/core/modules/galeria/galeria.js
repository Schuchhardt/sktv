export default class GaleriaCtrl {
  /* @ngInject */
  constructor($scope, $state, apiService) {

    const loadMainGallery = () => {
      apiService.loadMainGallery().then( (response) => {
        console.log(response);
        $scope.events = response.events;
      });
    };

    loadMainGallery();

  }
}

export default class AboutCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $sce, $localStorage, $document, apiService) {
    $rootScope.currentState = $state.current.name;

    const loadAbout = () => {
      apiService.loadSktvAbout().then((response) => {
        $scope.sktvPhotos = response.photos;
        console.log($scope.sktvPhotos);
      });
    };

    loadAbout();
  }
}

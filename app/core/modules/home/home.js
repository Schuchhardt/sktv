export default class HomeCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService) {
    $rootScope.currentState = $state.current.name;

    const loadInstagramFeed = () => {
      apiService.loadInstagramFeed().then((response) => {
        $scope.instagram_feed = response.instagram_feed;
      });
    };

    loadInstagramFeed();
  }
}

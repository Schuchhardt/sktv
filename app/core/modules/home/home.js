export default class HomeCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService, $sce) {
    $rootScope.currentState = $state.current.name;

    const loadRecentNews = () => {
      apiService.loadRecentNews().then((response) => {
        $scope.recent_news = response.recent_news;
        $scope.featured = response.featured;
        apiService.loadInstagramEmbed(response.instagram_feed).then( (res) => {
          $scope.instagram_feed = $sce.trustAsHtml(res.html);
        });
      });
    };

    loadRecentNews();
  }
}

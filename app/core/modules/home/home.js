export default class HomeCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService, $sce) {
    $rootScope.currentState = $state.current.name;

    const loadRecentNews = () => {
      apiService.loadRecentNews().then((response) => {
        $scope.recent_news_1 = response.recent_news.slice(0, 3);
        if (response.recent_news.length > 3) {
          $scope.recent_news_2 = response.recent_news.slice(3, 6);
        }
        $scope.featured = response.featured;
        apiService.loadInstagramEmbed(response.instagram_feed).then( (res) => {
          $scope.instagram_feed = $sce.trustAsHtml(res.html);
        });
      });
    };

    loadRecentNews();
  }
}

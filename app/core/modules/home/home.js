export default class HomeCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $sce, $localStorage, apiService) {
    $rootScope.currentState = $state.current.name;
    $scope.iframeLoaded = false;
    const loadRecentNews = () => {
      apiService.loadRecentNews().then((response) => {
        $scope.recent_news_1 = response.recent_news.slice(0, 3);
        if (response.recent_news.length > 3) {
          $scope.recent_news_2 = response.recent_news.slice(3, 6);
        }
        $scope.featured = response.featured;
        if (response.instagram_feed) {
          apiService.loadInstagramEmbed(response.instagram_feed).then( (res) => {
            $scope.instagram_feed = $sce.trustAsHtml(res.html);
            setTimeout(function() {
              $scope.iframeLoaded = true;
            }, 2000);
          });
        }
        apiService.loadBanners().then((res) => {
          $scope.$storage = $localStorage;
          $scope.$storage.main_banner = res.banners[0];
          $scope.$storage.second_banner = res.banners[1];
        });
      });
    };

    loadRecentNews();
  }
}

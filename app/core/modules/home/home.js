export default class HomeCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $sce, $localStorage, apiService) {
    $rootScope.currentState = $state.current.name;
    $scope.iframeLoaded = false;
    const loadRecentNews = () => {
      apiService.loadRecentNews().then((response) => {
        $scope.cover = response.cover;
        $scope.recent_news = response.recent_news;
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
          $scope.$storage.agency_banner = res.agency_banner;
          $scope.$storage.main_banner = res.banners[0];
          $scope.$storage.second_banner = res.banners[1] ? res.banners[1] : res.banners[0];
        });
      });
    };

    loadRecentNews();
  }
}

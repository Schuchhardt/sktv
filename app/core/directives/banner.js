export default ["$localStorage", "$sce", ($localStorage, $sce) => {
  return {
    restrict: 'E',
    template: '<a ng-href="{{link}}" target="_blank"><div class="main-banner" ng-if="img" ng-style="{\'background-image\': \'url(\' + img + \')\'}"></div></a>',
    scope: {
      second: "=?",
      agency: "=?",
    },
    link: function(scope) {
      let banner;
      if (scope.agency) {
        banner = $localStorage.agency_banner;
      } else {
        if (scope.second) {
          banner = $localStorage.second_banner;
        } else {
          banner = $localStorage.main_banner;
        }
      }
      if (banner) {
        scope.link = $sce.trustAsResourceUrl(banner.link);
        scope.img = banner.image_url;
      }
    }
  };
}];

export default ["$localStorage", "$sce", ($localStorage, $sce) => {
  return {
    restrict: 'E',
    template: '<a ng-href="{{link}}" target="_blank"><div class="main-banner" ng-if="img" ng-style="{\'background-image\': \'url(\' + img + \')\'}"></div></a>',
    scope: {
      second: "=?",
    },
    link: function(scope) {
      const main = (scope.second) ? $localStorage.second_banner : $localStorage.main_banner;
      if (main) {
        scope.link = $sce.trustAsResourceUrl(main.link);
        scope.img = main.image_url;
      }
    }
  };
}];

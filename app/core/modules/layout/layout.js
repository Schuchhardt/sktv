export default class LayoutCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, SETTINGS) {
    $rootScope.currentState = $state.current.name;
    $scope.searchUrl = SETTINGS.apiURL + '/search';

    $scope.remoteUrlRequestFn = function(str) {
      return {q: str};
    };

    const goToResult = function (result) {
      let state = "home";
      let stateParams = {};
      switch (result.type) {
      case "Novedades":
        state = "post";
        stateParams = {postId: result.id};
        break;
      case "Eventos":
        state = "detalle-galeria";
        stateParams = {galleryId: result.id};
        break;
      case "Agentes":
        state = "agentes-detail";
        stateParams = {agentType: result.agent_type, agentId: result.id};
        break;
      case "Skateparks":
        state = "skatepark-detail";
        stateParams = {regionId: result.region_id, skateparkId: result.id};
        break;
      }
      $state.go(state, stateParams);
    };

    $scope.$watch('searchResult', function (newValue) {
      if (newValue) {
        goToResult(newValue.originalObject);
      }
    }, true);
  }
}

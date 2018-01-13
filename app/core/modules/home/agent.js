export default class AgentCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService) {
    $rootScope.currentState = $state.current.name;

    const loadAgents = () => {
      apiService.loadAgents().then((response) => {
        $scope.agents = response.agents;
      });
    };

    loadAgents();
  }
}

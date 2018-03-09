export default class AgentCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $stateParams, apiService) {
    $rootScope.currentState = $state.current.name;
    $scope.agentType = $stateParams.agentType;

    const loadAgents = () => {
      apiService.loadAgents().then((response) => {
        $scope.agents = response.agents;
      });
    };

    const loadAgent = () => {
      apiService.loadAgent($stateParams.agentType, $stateParams.agentId).then( (response) => {
        $scope.currentAgent = response.agent;
      });
    };

    if ($state.current.name === 'agentes-list') {
      loadAgents();
    }

    if ($state.current.name === 'agentes-detail') {
      loadAgent();
    }
  }
}

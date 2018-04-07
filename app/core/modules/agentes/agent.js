export default class AgentCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $stateParams, apiService, $uibModal, $sce) {
    $rootScope.currentState = $state.current.name;
    $scope.agentType = $stateParams.agentType;

    const loadAgents = () => {
      apiService.loadAgents($stateParams.agentType).then((response) => {
        $scope.agents = response.agents;
      });
    };

    const loadAgent = () => {
      apiService.loadAgent($stateParams.agentType, $stateParams.agentId).then( (response) => {
        $scope.currentAgent = response.agent;
        const allPhotos = response.agent.photos;
        $scope.currentAgentPhoto = allPhotos.pop();
        $scope.currentAgentPhotos = allPhotos.reverse();
      });
    };

    $scope.showSlider = (photo) => {
      $uibModal.open({
        animation: false,
        templateUrl: 'sliderPhotos',
        controller: 'SliderPhotosCtrl',
        size: "lg",
        resolve: {
          currentImage: () => {
            return photo;
          },
          currentEvent: () =>{
            return {all_photos: $scope.currentAgentPhotos};
          }
        }
      });
    };

    $scope.trust = function (text) {
      return $sce.trustAsHtml(text);
    };

    if ($state.current.name === 'agentes-list') {
      loadAgents();
    }

    if ($state.current.name === 'agentes-detail') {
      loadAgent();
    }
  }
}

export default class MapaCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $stateParams, $sce, apiService, SETTINGS) {
    $rootScope.currentState = $state.current.name;

    const allRegions = [
      {
        name: "Aysén",
        id: "AI"
      },
      {
        name: "Magallanes y Antártica Chilena",
        id: "MA"
      },
      {
        name: "Tarapacá",
        id: "TA"
      },
      {
        name: "Antofagasta",
        id: "AN"
      },
      {
        name: "Atacama",
        id: "AT"
      },
      {
        name: "Coquimbo",
        id: "CO"
      },
      {
        name: "Región Metropolitana de Santiago",
        id: "RM"
      },
      {
        name: "Valparaíso",
        id: "VS"
      },
      {
        name: "Araucanía",
        id: "AR"
      },
      {
        name: "Bío-Bío",
        id: "BI"
      },
      {
        name: "Libertador General Bernardo O'Higgins",
        id: "LI"
      },
      {
        name: "Los Lagos",
        id: "LL"
      },
      {
        name: "Maule",
        id: "ML"
      },
      {
        name: "Arica y Parinacota",
        id: "AP"
      },
      {
        name: "Los Ríos",
        id: "LR"
      }
    ];

    const flaitometros = [
      require("../../../images/flaitometro/1.jpg"),
      require("../../../images/flaitometro/2.jpg"),
      require("../../../images/flaitometro/3.jpg"),
      require("../../../images/flaitometro/4.jpg"),
      require("../../../images/flaitometro/5.jpg"),
    ];

    const loadRegion = function () {
      $scope.currentRegion = _.findWhere(allRegions, {id: $stateParams.regionId});
      apiService.loadRegion($stateParams.regionId).then(function (res) {
        $scope.skateparks = res.skateparks;
      });
    };

    const loadSkatepark = function () {
      $scope.currentRegion = _.findWhere(allRegions, {id: $stateParams.regionId});
      apiService.loadSkatepark($stateParams.skateparkId).then(function (res) {
        $scope.currentSkatepark = res.skatepark;
        const allPhotos = res.skatepark.photos;
        $scope.featuredImages = allPhotos.slice(0, 2);
        $scope.currentSkateparkPhotos = allPhotos.slice(2, 6);
        $scope.mapURL = 'https://www.google.com/maps/embed/v1/place?key=' + SETTINGS.mapKey + '&q=' + encodeURI(res.skatepark.location);
        $scope.flaitometro = flaitometros[res.skatepark.flaitometro - 1];
      });
    };

    $scope.trust = function (text) {
      return $sce.trustAsHtml(text);
    };

    $scope.goToRegion = function (reg) {
      $state.go('skateparks-region', {regionId: reg.split('-')[1]});
    };

    if ($state.current.name === 'skateparks-region' ) {
      loadRegion();
    }
    if ($state.current.name === 'skatepark-detail' ) {
      loadSkatepark();
    }

  }
}

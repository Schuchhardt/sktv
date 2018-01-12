export default ["$http",
  ($http) => {
    const CONFIG = {
      apiURL: (window.location.hostname === "localhost") ? 'http://localhost:8080/api' : "https://sktv-api.herokuapp.com/api",
    };
    const service = {
      loadMainGallery: () => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/events/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadGallery: (galleryId) => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/events/' + galleryId
        }).then(function(response) {
          return response.data;
        });
      },
      loadInstagramFeed: () =>{
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/feed/'
        }).then(function(response) {
          return response.data;
        });
      }
    };

    return service;
  }
];

export default ($http) => {
  const CONFIG = {
    apiURL: (window.location.hostname === "localhost") ? 'http://localhost:8080/api' : "http://admin.orangetuescuela.com/api",
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
  };

  return service;
};

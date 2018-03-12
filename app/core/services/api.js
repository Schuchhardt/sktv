export default ["$http",
  ($http) => {
    const CONFIG = {
      apiURL: (window.location.hostname === "localhost") ? 'http://localhost:8080/api' : "https://sktv-api.herokuapp.com/api",
      instagramEmbed: 'https://api.instagram.com/oembed?url=http://instagr.am/p/'
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
      loadGalleryPhotos: (galleryId, page) =>{
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/events/' + galleryId + '/photos',
          params: {
            page: page
          }
        }).then(function(response) {
          return response.data;
        });
      },
      loadPost: (postId) => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/posts/' + postId
        }).then(function(response) {
          return response.data;
        });
      },
      loadAllPosts: () => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/posts/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadInstagramFeed: () => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/feed/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadRecentNews: () => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/recent_news'
        }).then(function(response) {
          return response.data;
        });
      },
      loadAgents: () => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/agents'
        }).then(function(response) {
          return response.data;
        });
      },
      loadAgent: (agentType, agentId) => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/agents/' + agentType + '/' + agentId
        }).then(function(response) {
          return response.data;
        });
      },
      loadInstagramEmbed: (mediaId) => {
        return $http({
          method: 'GET',
          url: CONFIG.instagramEmbed + mediaId
        }).then(function(response) {
          return response.data;
        });
      },
      loadRegion: (regionId) => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/skateparks-list/' + regionId
        }).then(function(response) {
          return response.data;
        });
      },
      loadSkatepark: (skateparkId) => {
        return $http({
          method: 'GET',
          url: CONFIG.apiURL + '/skateparks/' + skateparkId
        }).then(function(response) {
          return response.data;
        });
      },
    };

    return service;
  }
];

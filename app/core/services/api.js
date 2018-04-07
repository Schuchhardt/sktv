export default ["$http", "SETTINGS",
  ($http, SETTINGS) => {
    const service = {
      loadMainGallery: () => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/events/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadGallery: (galleryId) => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/events/' + galleryId
        }).then(function(response) {
          return response.data;
        });
      },
      loadGalleryPhotos: (galleryId, page) =>{
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/events/' + galleryId + '/photos',
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
          url: SETTINGS.apiURL + '/posts/' + postId
        }).then(function(response) {
          return response.data;
        });
      },
      loadAllPosts: () => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/posts/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadInstagramFeed: () => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/feed/'
        }).then(function(response) {
          return response.data;
        });
      },
      loadRecentNews: () => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/recent_news'
        }).then(function(response) {
          return response.data;
        });
      },
      loadBanners: () => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/banners'
        }).then(function(response) {
          return response.data;
        });
      },
      loadAgents: (agentType) => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/agents/' + agentType
        }).then(function(response) {
          return response.data;
        });
      },
      loadAgent: (agentType, agentId) => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/agents/' + agentType + '/' + agentId
        }).then(function(response) {
          return response.data;
        });
      },
      loadInstagramEmbed: (mediaId) => {
        return $http({
          method: 'GET',
          url: SETTINGS.instagramEmbed + mediaId
        }).then(function(response) {
          return response.data;
        });
      },
      loadRegion: (regionId) => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/skateparks-list/' + regionId
        }).then(function(response) {
          return response.data;
        });
      },
      loadSkatepark: (skateparkId) => {
        return $http({
          method: 'GET',
          url: SETTINGS.apiURL + '/skateparks/' + skateparkId
        }).then(function(response) {
          return response.data;
        });
      },
      subscribe: (userEmail) => {
        return $http({
          method: 'POST',
          url: SETTINGS.apiURL + '/subscribe/',
          data: {email: userEmail}
        }).then(function(response) {
          return response.data;
        });
      },
    };

    return service;
  }
];

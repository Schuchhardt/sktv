export default class PostCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, $sce, $stateParams, $window, apiService, copyService, SETTINGS) {
    $rootScope.currentState = $state.current.name;
    $scope.clipboardText = 'Click para copiar enlace';
    $scope.currentUrl = encodeURIComponent(document.URL);

    const loadPost = () => {
      apiService.loadPost($stateParams.postId).then((response) => {
        $scope.currentPost = response.post;
        $scope.postPhotos = response.post.all_photos;
        $scope.relatedPosts = response.related_posts;
        $scope.mapURL = 'https://www.google.com/maps/embed/v1/place?key=' + SETTINGS.mapKey + '&q=' + encodeURI(response.post.place);
      });
    };

    const loadAllPosts = () =>{
      apiService.loadAllPosts().then((response) => {
        $scope.allPosts = response.posts;
      });
    };

    $scope.trust = function (text) {
      return $sce.trustAsHtml(text);
    };

    $scope.copyLinkToClipboard = function () {
      copyService(document.URL);
      $scope.clipboardText = 'Copiado!';
      setTimeout(function() {
        $scope.clipboardText = 'Click para copiar enlace';
      }, 1000);
    };

    $scope.postToFb = function () {
      const url = "https://www.facebook.com/sharer/sharer.php?u=" + $scope.currentUrl;
      $window.open(url, 'Facebook', 'status = 1, left = 350, top = 90, height = 350, width = 420, resizable = 0');
    };

    $scope.postToTwitter = function () {
      var tit = encodeURIComponent('SKTV Chile');
      const url = 'https://twitter.com/intent/tweet?text=' + tit + '&hashtags=sktv, sktvchile&url=' + $scope.currentUrl;
      $window.open(url, 'Twitter', 'status = 1, left = 350, top = 90, height = 350, width = 420, resizable = 0');
    };

    if ($state.current.name === 'post') {
      loadPost();
    } else {
      loadAllPosts();
    }
  }
}

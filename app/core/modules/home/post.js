export default class PostCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService, $stateParams, SETTINGS) {
    $rootScope.currentState = $state.current.name;

    const loadPost = () => {
      apiService.loadPost($stateParams.postId).then((response) => {
        $scope.currentPost = response.post;
        $scope.relatedPosts = response.related_posts;
        $scope.mapURL = 'https://www.google.com/maps/embed/v1/place?key=' + SETTINGS.mapKey + '&q=' + encodeURI(response.post.place);
      });
    };

    const loadAllPosts = () =>{
      apiService.loadAllPosts().then((response) => {
        $scope.allPosts = response.posts;
      });
    };

    if ($state.current.name === 'post') {
      loadPost();
    } else {
      loadAllPosts();
    }
  }
}

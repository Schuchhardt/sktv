export default class PostCtrl {
  /* @ngInject */
  constructor($scope, $state, $rootScope, apiService, $sce, $stateParams) {
    $rootScope.currentState = $state.current.name;

    const loadPost = () => {
      apiService.loadPost($stateParams.postId).then((response) => {
        $scope.currentPost = response.post;
        $scope.relatedPosts = response.related_posts;
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

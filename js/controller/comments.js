app.controller('CommentsController', ['$scope','PostFactory','$routeParams', function ($scope, PostFactory, $routeParams){
	
	$scope.loading = true;
	$scope.newComment= {};

	PostFactory.getPost($routeParams.id).then(function(post) {
		console.log($routeParams.id);
		$scope.loading = false;
		$scope.title = post.name;
		$scope.comments = post.comments;
	},function(msg) {
		alert(msg);
	});

$scope.addComment = function() {
	$scope.comments.push($scope.newComment);


	PostFactory.add($scope.newComment, $routeParams.id).then(function () {

	}, function (argument) {
		alert('Votre message n\'a pas pu être sauvegardé');
	});
	$scope.newComment = {};
	$scope.newComment.username = '';
};


}]);
app.controller('IndexController', ['$scope', 'PostFactory', function($scope, PostFactory){
	$scope.posts = PostFactory.getPosts().then(function(posts){
		$scope.posts = posts;
	},
	function(msg){
		alert(msg);
	});
	
}]) 
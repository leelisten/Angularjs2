app.controller('PostsController', ['$scope','PostFactory', 'myService', 'myFactory', 'myProvider', function ($scope, PostFactory, myService, myFactory, myProvider ) {

	$scope.loading = true;
	$scope.posts = PostFactory.getPosts().then(function(posts){
		$scope.loading = false;
		$scope.posts = posts;
	},
	function(msg){
		alert(msg);
	});


	$scope.serviceOutput = "myService" + myService;
	$scope.objectName = myService.name;

	$scope.factoryOutput = "myFactory" + myFactory;

	$scope.providerOutput = "myProvider" + myProvider;
}]);


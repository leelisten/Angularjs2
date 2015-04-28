app.controller('ArticlesController', ['$scope','ArticleFactory', 'myService', 'myFactory', 'myProvider', function ($scope, ArticleFactory, myService, myFactory, myProvider ) {

	$scope.loading = true;
	$scope.articles = ArticleFactory.getArticles().then(function(articles){
		$scope.loading = false;
		$scope.articles = articles;
	},
	function(msg){
		alert(msg);
	});


	$scope.serviceOutput = "myService" + myService;
	$scope.objectName = myService.name;

	$scope.factoryOutput = "myFactory" + myFactory;

	$scope.providerOutput = "myProvider" + myProvider;
}]);


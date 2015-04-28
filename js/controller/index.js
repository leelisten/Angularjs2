app.controller('IndexController', ['$scope', 'ArticleFactory', function($scope, ArticleFactory){
	$scope.articles = ArticleFactory.getArticles().then(function(articles){
		$scope.articles = articles;
	},
	function(msg){
		alert(msg);
	});
	
}]) 
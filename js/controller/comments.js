app.controller('CommentsController', ['$scope','ArticleFactory','$routeParams', function ($scope, ArticleFactory, $routeParams){
	
	$scope.loading = true;
	$scope.newComment= {};

	ArticleFactory.getArticle($routeParams.id).then(function(article) {
		console.log(article.commentaires[0].commentaire);
		$scope.loading = false;
		$scope.title = article.titreArticle;
		$scope.picture = article.picture;
		$scope.comments = article.commentaires;
	},function(msg) {
		alert(msg);
	});

$scope.addComment = function() {
	$scope.comments.push($scope.newComment);


	ArticleFactory.add($scope.newComment, $routeParams.id).then(function () {

	}, function (argument) {
		alert('Votre message n\'a pas pu être sauvegardé');
	});
	$scope.newComment = {};
	$scope.newComment.username = '';
};


}]);
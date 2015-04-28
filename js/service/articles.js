app.factory('ArticleFactory', function($http, $q, $timeout){

var factory = {
		articles : false,
		getArticles : function(){
			var deferred = $q.defer();
			if (factory.articles !== false) {
				deferred.resolve(factory.articles);
			}
			else{
				$http.get('https://api.parse.com/1/classes/Articles', {	
					headers: { 
						'X-Parse-Application-Id':'feKJSdbBI8qHeLlTUWWW5wfU7lNPkTwfbwMxTi0s', 
						'X-Parse-REST-API-Key':'Y6UPKjq0eEba1Hb9Fjpo3DLOOTe95aup2ucTJR2c'
					}
					})
				.success(function(data, status){
					factory.articles = data.results;
					$timeout(function(){
						deferred.resolve(factory.articles);
					}, 2000)	
				}).error(function(data, status){
					deferred.reject('impossible de recupérer les articles')
				});
			}
			return deferred.promise;
			//return factory.articles;
		},
		getArticle : function(id){
			//console.log('dans services ' + id);
			var deferred = $q.defer();
			var article = {};
			var articles = factory.getArticles().then(function(articles) {
				angular.forEach(articles, function(value, key) {
					console.log('value.objectId : ' + value.objectId + 'id :' + id);
					if (value.objectId == id) {article = value}
				});
				deferred.resolve(article);
			}, function(msg) {
				deferred.reject(msg);
			});
			return deferred.promise;	
		},
		add : function(comment, id) {
			var deferred = $q.defer();
			console.log(comment);
			$http.post('https://api.parse.com/1/classes/Articles/'+ id + '/commentaire',comment,{
				headers: { 
					'X-Parse-Application-Id':'feKJSdbBI8qHeLlTUWWW5wfU7lNPkTwfbwMxTi0s', 
					'X-Parse-REST-API-Key':'Y6UPKjq0eEba1Hb9Fjpo3DLOOTe95aup2ucTJR2c',
					'Content-Type':'application/json'
				}
			})
				.success(function(data, status){
					//factory.articles = data.results;
					$timeout(function(){
						deferred.resolve(factory.articles);
					}, 2000)	
				}).error(function(data, status){
					deferred.reject('impossible d\'enregistrer les articles')
				});
			deferred.resolve();
			return deferred.promise;
		}
	};
	return factory;
	
});



// PostFactory.getPost($routeParams.id).then(function(post) {
// 		$scope.newComment= {};
// 		console.log(post.comments);
// 		post.comments.push(newComment)

// 	},function(msg) {
// 		alert(msg);
// 	});
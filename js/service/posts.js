app.factory('PostFactory', function($http, $q, $timeout){

var factory = {
		posts : false,
		getPosts : function(){
			var deferred = $q.defer();
			if (factory.posts !== false) {
				deferred.resolve(factory.posts);
			}
			else{
				$http.get('https://api.parse.com/1/classes/post', {	
					headers: { 
						'X-Parse-Application-Id':'feKJSdbBI8qHeLlTUWWW5wfU7lNPkTwfbwMxTi0s', 
						'X-Parse-REST-API-Key':'Y6UPKjq0eEba1Hb9Fjpo3DLOOTe95aup2ucTJR2c'
					}
					})
				.success(function(data, status){
					factory.posts = data.results;
					$timeout(function(){
						deferred.resolve(factory.posts);
					}, 2000)	
				}).error(function(data, status){
					deferred.reject('impossible de recupérer les articles')
				});
			}
			return deferred.promise;
			//return factory.posts;
		},
		getPost : function(id){
			console.log('dans services ' + id);
			var deferred = $q.defer();
			var post = {};
			var posts = factory.getPosts().then(function(posts) {
				angular.forEach(posts, function(value, key) {
					if (value.objectId == id) {post = value}
				});
				deferred.resolve(post);
			}, function(msg) {
				deferred.reject(msg);
			});
			return deferred.promise;	
		},
		add : function(comment, id) {
			var deferred = $q.defer();
			console.log(comment);
			$http.post('https://api.parse.com/1/classes/post/'+ id,comment,{
				headers: { 
					'X-Parse-Application-Id':'feKJSdbBI8qHeLlTUWWW5wfU7lNPkTwfbwMxTi0s', 
					'X-Parse-REST-API-Key':'Y6UPKjq0eEba1Hb9Fjpo3DLOOTe95aup2ucTJR2c',
					'Content-Type':'application/json'
				}
			})
				.success(function(data, status){
					//factory.posts = data.results;
					$timeout(function(){
						deferred.resolve(factory.posts);
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
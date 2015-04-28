var app = angular.module('commentsModule', ['ngRoute','door3.css','ngResource'] );

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller:'ArticlesController'})
		.when('/comments/:id', {templateUrl: 'partials/comments.html', controller:'CommentsController'})
		.otherwise({ redirectTo: '/' });
}]);




var MyFunc = function(){
	this.name = "default name";
	this.$get = function() {
		this.name = "new name";
		return "Hello form MyFunc.$get. this name = " + this.name;
	};
	return "Hello form MyFunc.$get. this name = " + this.name;
};
									
app.service('myService', MyFunc);
app.factory('myFactory', MyFunc);
app.provider('myProvider', MyFunc);

//https://api.parse.com/1/classes/post

//https://feKJSdbBI8qHeLlTUWWW5wfU7lNPkTwfbwMxTi0s:javascript-key=l9gByLh4ae0WPVIz9O4hLaAidQBWGtRKVSzZ9Byc@api.parse.com/1/classes/post

//https://myAppID:javascript-key=myJavaScriptKey@api.parse.com/1/classes/GameScore/Ed1nuqPvcm
App.Router.map(function () {
	this.route('catchall', { path: '/*url'});  // catch-all routes

	this.resource('articles', function() {
		this.route('create', { path: '/create' });
		this.route('article', { path: ':article_id' });
  	});    

  	this.resource('photos', function() {
		this.route('create', { path: '/create' });
		this.route('photo', { path: ':photo_id' });
  	}); 

  	this.resource('store', function() {

  	});
});

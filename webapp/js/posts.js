App.PostsRoute = Ember.Route.extend({
  model: function () {
    return $.getJSON('/api/posts');
    //this.store.find('post');
  },

  /* show first element of model if post_id is not shown in the url */
  //afterModel: function (posts, transition) {  //  
  //  if (posts.length > 0 && !transition.params.post_id) { 
  //    this.transitionTo('posts.detail', posts[0]);
  //  }
  //}
});

App.PostsDetailRoute = Ember.Route.extend({
  /* option #1 - Returning model as bellow manner works, but will not sync with parent's route handler's model 
   * If this route is nested by parent route, you do not have to get model this way since you can get this model from parent's route
   * On the other hand, if this route is defined as a root route you should do as bellow
   */
  //model: function (params) {
  //  return $.getJSON('/api/posts/' + params.post_id);
  //}

  model: function (params) {
    var posts = this.modelFor('posts');
    var post = _.find(posts, function (post) {
      return post.id === params.post_id;
    });
    return post;
  }

  /* setupController is useful if you need to add extra data into the model 
   * or get data from backend every time route is hit
   * */
  , setupController: function (controller, model) {
    var newModel = _.extend(model, { image_url: 'http://farm4.staticflickr.com/3754/12197825415_3a9ed49c75.jpg' });
    this.controller.set('model', newModel);
  }
});

App.PostsEditRoute = Ember.Route.extend({
  /* option #2 - Returning model as bellow manner will sync this route handler's model with parent route handler's model */
  model: function (params) {
    var posts = this.modelFor('posts');
    var post = _.find(posts, function (post) {
      return post.id === params.post_id;
    });
    return post;
  }
});

App.PostsNewRoute = Ember.Route.extend({
  model: function () {
    return {};
  }
});

App.PostsNewController = Ember.Controller.extend({
  actions: {
    addFile: function () {
      //files.pushObject({
      //  id: this.get('title'),
      //  title: this.get('title'),
      //  author: this.get('author'),
      //  contents: this.get('contents')
      //});
    }
  }
});

App.PostsEditController = Ember.ObjectController.extend({
  company: 'GE Healthcare',
  actions: {
    editFile: function (file) {
      //files.pushObject({
      //  id: this.get('title'),
      //  title: this.get('title'),
      //  author: this.get('author'),
      //  contents: this.get('contents')
      //});
    }
  }
});

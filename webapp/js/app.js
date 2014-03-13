var App = App || Ember.Application.create();

//App.ApplicationAdapter = DS.FixtureAdapter.extend();

//App.Post.FIXTURES = [
//  { id: 1, title: 'test', author: 'test', contents: 'test' },
//  { id: 1, title: 'test', author: 'test', contents: 'test' }
//];

App.Router.map(function(){
  this.resource('posts', function(){
    this.route('detail', { path: '/:post_id' });
    this.route('edit', { path: '/edit/:post_id' });
    this.route('new', { path: '/new'});
  });
});

App.ApplicationController = Ember.Controller.extend({
  init: function() {
    this.set('name', 'Kwon Hyojung');
  },

  actions: {
    saveName: function(value) {
      localStorage.appName = value;
    }
  }
});



Ember.Handlebars.helper('markdown', function(value){
  if (value)
    return new Handlebars.SafeString(markdown.toHTML(value));
  return '';
});
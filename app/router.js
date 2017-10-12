import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('foods', function(){
    this.route('food', {path: ':food_id'}, function() {
      this.route('eating')
    });
  });
  this.route('about');
  this.route('contact');
  this.route('favourite-word', {path: 'favourite-word/:word'});
});

export default Router;

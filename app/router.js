import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('foods', function(){
      this.route('food', {path: ':food_id'});
      this.route('food.edit', {path: ':food_id/edit'});
  });
  this.route('about');
  this.route('contact');
  this.route('favourite-word', {path: 'favourite-word/:word'});
  this.route('restaurants', function() {
    this.route('restaurant', {path: ':restaurant_id'});
    this.route('restaurant.edit', {path: ':restaurant_id/edit'});
  });
});

export default Router;

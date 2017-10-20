import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(){
      this.get('model').save()
      this.transitionToRoute('foods.food', this.get('model.id'))
    }
  }
});

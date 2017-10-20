import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    toggleAvailability(food) {
      food.toggleProperty('isAvailable')
      food.save();
    },
    toggleOpen() {
      this.toggleProperty('isOpen')
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model','isAvailable', true),
  actions: {
    makeUnavailable(food){
      Ember.set(food, 'isAvailable', false),
      food.save();
    },
    makeAvailable(food){
      Ember.set(food, 'isAvailable', true),
      food.save();
    },
    saveNewItem(newItem) {
      this.store.createRecord('food',{
        isAvailable: false,
        name: this.get('newItem')
      }).save();
      Ember.set(this, 'newItem', '');
    },
    destroyItem(food) {
      food.destroyRecord()
    }
  }
});


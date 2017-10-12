import DS from 'ember-data';
// import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  description: DS.attr('string')
});

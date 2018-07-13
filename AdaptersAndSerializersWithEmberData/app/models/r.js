import DS from 'ember-data';


export default DS.Model.extend({
    title: DS.attr('string'),
    num_comments: DS.attr('string') 
});

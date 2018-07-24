import DS from 'ember-data';

let Instructor = DS.Model.extend({
    name: DS.attr('string'),
    age: DS.attr('number'),
    // classes: DS.hasMany('class')
});


Instructor.reopenClass({
    FIXTURES: [
        {id: 1, name: 'John', age: 17, classes:[1,2]},
        {id: 2, name: 'Jack', age: 18, classes:[4,5]},
        {id: 3, name: 'Suze', age: 17, classes:[3]},
        {id: 4, name: 'Jane', age: 17, classes:[6]}
    ]
})

export default Instructor;
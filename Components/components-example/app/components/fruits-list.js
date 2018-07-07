import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    tagName: 'main',
    classNames: ['fruits'],
    init(){
        this._super(...arguments);
        this.arrayOfFruits = Ember.String.w(this.attrs.listOfFruits)
    },
    
    actions: {
        addFruit(fruit) {
            this.get('arrayOfFruits').pushObject(fruit)
        }
    }
});

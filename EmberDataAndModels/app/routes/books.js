import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
    model() {
        return Ember.RSVP.hash({
            book: this.get('store').findAll('book'),
            email: this.get('store').findAll('email')
        }) 
    },

    setupController(controller, models){
        controller.setProperties(models)
    }
});

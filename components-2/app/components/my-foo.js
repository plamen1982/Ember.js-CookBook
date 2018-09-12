import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';

export default Component.extend({
    firstName: 'Plamen',
    lastName: 'Hristov',
    fullName: computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`
    }),

    actions: {
        hello(newName) {
            this.set('firstName', newName)
        }
    }
});

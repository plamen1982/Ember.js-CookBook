import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    firstName: 'Peter',
    lastName: 'Jordanson',

    fullName: computed('firstName', 'lastName', function(){
        return `Computed Name: ${this.get('firstName')} ${this.get('lastName')}`
    }),
    fn: computed.alias('fullName')
});

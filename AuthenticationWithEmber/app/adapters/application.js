import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    session: inject(),
    headers: computed('session.token', function() {
        return {
            'authorization': `Bearer ${this.get('session.token')}`
        }
    })
});

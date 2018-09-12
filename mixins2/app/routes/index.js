import Route from '@ember/routing/route';
import Mixin from '../mixins/editable';
import EmberObject from '@ember/object';

export default Route.extend(Mixin, {
    comment : EmberObject.extend(Mixin, {
        some
    }),
    model() {       
        return [1, 2, 3]
    }
});

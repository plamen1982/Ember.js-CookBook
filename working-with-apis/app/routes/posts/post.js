import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log('From post')
        return this.store.peekRecord('post', params.post_id);
      }
});

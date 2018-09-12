import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log(3)
        return this.store.findRecord('post', params.post_id);
      }
});

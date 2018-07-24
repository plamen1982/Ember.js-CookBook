import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        debugger;
        return this.store.query('r', params.subreddit);
    }
});

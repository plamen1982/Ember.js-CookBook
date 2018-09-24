import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        console.log(`from handler posts`)        
        return this.store.findAll('post');
    }
});

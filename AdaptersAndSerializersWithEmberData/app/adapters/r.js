import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://www.reddit.com/',
    urlForQuery (query, modelName) {
        return `${this.get('host')}/${modelName}/${query}.json`
    }
});

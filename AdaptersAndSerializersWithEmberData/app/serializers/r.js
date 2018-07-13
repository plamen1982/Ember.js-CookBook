import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    normalizeResponse (store, primaryModelClass, payload, id, requestType) {
        return {
            data: payload.data.children.map((info)=> {
                return {
                    id: info.data.id,
                    type: 'r',
                    attributes: info.data
                }
            })
        }
        //debugger;        
        //return this._super(...arguments);
    }
});

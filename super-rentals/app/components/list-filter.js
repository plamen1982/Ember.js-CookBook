import Component from '@ember/component';

export default Component.extend({
    className: ['list-filter'],
    value: '',
    init() {
        this._super(...arguments);
        this.get('filter')('').then(result => this.set('results', result));
    },

    actions: {
        handleFilterEntry() {
            let filterEntry = this.get('value');
            this.get('filter')(filterEntry).then(filterResult => this.set('results', filterResult));
        }
    }
});

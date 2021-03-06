import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import run from 'ember-runloop';
import RSVP from 'rsvp';

const ITEMS = [{city: 'San Franciso'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Franciso'}];

moduleForComponent('list-filter', 'Integration | Component | list filter', {
  integration: true
});

test('should initially load all listings', (assert) => {
  this.on('filterByCity', (val) => {
    if(val === '') {
      return RSVP.resolve({
        query: val,
        results: ITEMS });
    } else {
      return RSVP.resolve({
        query: val,
        results: FILTERED_ITEMS });
      }
  });
  
this.render(hbs`
    {{#list-filter filter=(action 'filterByCity') as |results|}}
      <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
      </ul>
    {{/list-filter}}`);

this.$('.list-fiter input').val('San').keydown();

  return wait().then(()=> {
    assert.equal(this.$('.city').length, 1);
    assert.equal(this.$('.city').first().text().trim(), 'San Franciso');
  });
});

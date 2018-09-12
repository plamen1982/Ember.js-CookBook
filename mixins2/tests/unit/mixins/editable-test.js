import EmberObject from '@ember/object';
import EditableMixin from 'mixins/mixins/editable';
import { module, test } from 'qunit';

module('Unit | Mixin | editable');

// Replace this with your real tests.
test('it works', function(assert) {
  let EditableObject = EmberObject.extend(EditableMixin);
  let subject = EditableObject.create();
  assert.ok(subject);
});

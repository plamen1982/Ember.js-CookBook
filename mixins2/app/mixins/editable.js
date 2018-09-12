import Mixin from '@ember/object/mixin';

export default Mixin.create({
    edit() {
        console.log('starting to edit');
        this.set('isEditing', true);
      },
      isEditing: false
});

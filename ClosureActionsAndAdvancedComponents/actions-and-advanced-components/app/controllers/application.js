import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        enter() {
            alert('Mouse was entered')
        },
        pressedAgain() {
            alert('You pressed 2 times')            
        },
        mouseIsOut() {
            alert('Mouse is out')
        }
    }
});

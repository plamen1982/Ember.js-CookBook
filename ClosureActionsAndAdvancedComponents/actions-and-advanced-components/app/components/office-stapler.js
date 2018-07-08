import Component from '@ember/component';

export default Component.extend({
    number: 100,
    doubleClick() {
        this.attrs.pressedAgain();
    },
    mouseEnter() {
        this.sendAction();
    },
    
    mouseLeave() {
        this.attrs.mouseOuter();
    }
});

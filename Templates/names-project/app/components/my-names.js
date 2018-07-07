import Component from '@ember/component';

export default Component.extend({
    firstName: 'Gosho',
    secondName: 'Stamatov',
    lastName: 'Peshov',
    actions: {
        wholeName(firstName, secondName, lastName) {
            alert(`My first name is ${firstName} , my second name is ${secondName} and my last name is ${lastName}`)
        }
    }
});

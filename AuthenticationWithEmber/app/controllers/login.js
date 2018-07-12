import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    loginName: null,
    password: null,
    session: inject(),
    actions: {
        authenticate() {
            this.get('session').authenticate(this.get('loginName'),
            this.get('password')).then(() => {
                alert('Logged in!');
                this.transitionToRoute('students');
            }, (err) => {
                console.log(err)
                alert('Error with login' + err.responseText);
            })
        }
    }
});

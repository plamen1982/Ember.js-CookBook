import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as home page', function(assert) {
    visit('/');
    andThen(function(){
        assert.equal(currentURL(), '/rentals', 'should automaticaly redirect');
    });
});

test('should link to information about company', function(assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function(){
        assert.equal(currentURL(), '/about', 'should navigate to about page');
    });
});

test('should link to contact information', function(assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function(){
        assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
});

test('should list available rentals', function(assert) {
    visit('/');
    andThen(function(){
        assert.equal(find('.listing').length, 3, 'should see 3 listings')
    })
});

test('should filter the list of rentals by city', function(assert) {

});

test('should show details about rentals', function(assert) {

});



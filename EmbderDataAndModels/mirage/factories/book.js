import {Factory} from 'ember-cli-mirage';
import {faker} from 'ember-cli-mirage';


export default Factory.extend({
    title: faker.lorem.sentences,
    author() { return faker.name.findName()},
    year: faker.date.past,
});

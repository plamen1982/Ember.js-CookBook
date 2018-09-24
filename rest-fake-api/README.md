How to create a rest server with fake data
resource: https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server 
Steps:
1. create db.json file
2. insert json valid structure
3. npm install -g json-server - install globally
4. json-server db.json - start the server
5. http://localhost:3000
6. npm install faker lodash
7. create generate.js file
8. in generate.js
  module.exports = function() {
    let faker = require('faker');
    let _ = require('lodash');
    return {
        people: _.times(100, (n)=> {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}
9. json-server generate.js
10. check - http://localhost:3000/people
const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        // assert(1+1 === 3); // test fail
        // assert(1+1 === 2); // test pass
        const joe = new User({ name: 'Joe' });
        joe.save().then(() => {
            assert(!joe.isNew);
            done();
        });
    });
});
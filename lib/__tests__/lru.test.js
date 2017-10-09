const LRU = require('../lru').default;

describe('LRU Test', function() {
    test('LRU is function', () => {
        expect(typeof LRU).toBe('function');
    });
});

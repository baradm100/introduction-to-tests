const chai = require('chai');
const {
    expect
} = chai;

require('../date');

describe('Date', function () {
    describe('#add()', function () {
        describe('Doing things correctly', function () {
            it('should add 1 second correctly');

            it('should add 1 minute correctly');

            it('should add 1 hour correctly');

            it('should add 1 day correctly');

            it('should add 1 week correctly');

            it('should add 1 month correctly');

            it('should add 1 year correctly');
        });

        describe('Validation', function () {
            it("should add 's' to the end of the `unit`");

            it('should throw an error - "Invalid value, must be a number"');

            it('should throw an error - "Invalid date unit"');
        });

        describe('Edge cases', function () {
            describe('Short year', function () {
                it('should add 1 day correctly to short year during February');

                it('should add 1 year correctly to short year during February');
            });

            describe('Long year', function () {
                it('should add 1 day correctly to long year during February');

                it('should add 1 year correctly to long year during February');
            });
        });
    });
});
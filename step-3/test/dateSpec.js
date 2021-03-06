const chai = require('chai');
const { expect } = chai;

require('../date');

describe('Date', function () {
    let baseDate;

    beforeEach(function () {
        baseDate = new Date('2010-01-01T00:00:00.000Z');
    });

    describe('#add()', function () {
        describe('Doing things correctly', function () {
            it('should add 1 second correctly', function () {
                baseDate.add('seconds', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-01T00:00:01.000Z'
                );
            });

            it('should add 1 minute correctly', function () {
                baseDate.add('minutes', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-01T00:01:00.000Z'
                );
            });

            it('should add 1 hour correctly', function () {
                baseDate.add('hours', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-01T01:00:00.000Z'
                );
            });

            it('should add 1 day correctly', function () {
                baseDate.add('days', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-02T00:00:00.000Z'
                );
            });

            it('should add 1 week correctly', function () {
                baseDate.add('weeks', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-08T00:00:00.000Z'
                );
            });

            it('should add 1 month correctly', function () {
                baseDate.add('months', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-02-01T00:00:00.000Z'
                );
            });

            it('should add 1 year correctly', function () {
                baseDate.add('years', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2011-01-01T00:00:00.000Z'
                );
            });
        });

        describe('Validation', function () {
            it("should add 's' to the end of the `unit`", function () {
                baseDate.add('second', 1);

                expect(baseDate.toISOString()).to.be.equal(
                    '2010-01-01T00:00:01.000Z'
                );
            });

            it('should throw an error - "Invalid value, must be a number"', function () {
                expect(() => baseDate.add('months', 'not a number')).to.throw(
                    Error,
                    'Invalid value, must be a number'
                );
            });

            it('should throw an error - "Invalid date unit"', function () {
                expect(() => baseDate.add('invalid unit', 1)).to.throw(
                    Error,
                    'Invalid date unit'
                );
            });
        });

        describe('Edge cases', function () {
            describe('Short year', function () {
                beforeEach(function () {
                    baseDate = new Date('2018-02-28T00:00:00.000Z');
                });

                it('should add 1 day correctly to short year during February', function () {
                    baseDate.add('day', 1);

                    expect(baseDate.toISOString()).to.be.equal(
                        '2018-03-01T00:00:00.000Z'
                    );
                });

                it('should add 1 year correctly to short year during February', function () {
                    baseDate.add('year', 1);

                    expect(baseDate.toISOString()).to.be.equal(
                        '2019-02-28T00:00:00.000Z'
                    );
                });
            });

            describe('Long year', function () {
                it('should add 1 day correctly to long year during February', function () {
                    baseDate = new Date('2016-02-28T00:00:00.000Z');
                    baseDate.add('day', 1);

                    expect(baseDate.toISOString()).to.be.equal(
                        '2016-02-29T00:00:00.000Z'
                    );
                });

                it('should add 1 year correctly to long year during February', function () {
                    baseDate = new Date('2016-02-29T00:00:00.000Z');
                    baseDate.add('year', 1);

                    expect(baseDate.toISOString()).to.be.equal(
                        '2017-03-01T00:00:00.000Z'
                    );
                });
            });
        });
    });
});

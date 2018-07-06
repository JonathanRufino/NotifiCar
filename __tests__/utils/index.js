
import {
    parseNumberToTwoDigits, guid, getDateAsArray,
} from '../../app/utils';

describe('Utilities methods', () => {
    describe('Format number', () => {
        it('should convert one digit number to two digit number', () => {
            const number = parseNumberToTwoDigits(1);
            expect(number.length).toEqual(2);
        });

        it('should not convert number', () => {
            const initialNumber = 12;
            const newNumber = parseNumberToTwoDigits(initialNumber);
            expect(initialNumber).toEqual(newNumber);
        });
    });

    it('should generate a guid number', () => {
        const number = guid();
        expect(number).not.toEqual(null);
    });

    it('should generate date as an array', () => {
        const date = getDateAsArray();
        expect(date.length).toEqual(4);
    });
});

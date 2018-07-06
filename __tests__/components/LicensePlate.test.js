import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LicensePlate from '../../app/components/LicensePlate';

describe('<LicensePlate />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <LicensePlate
                licensePlate='ABC-1234'
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

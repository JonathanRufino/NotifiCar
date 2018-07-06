import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LicensePlateInput from '../../app/components/license-plate-input';
import { Images } from '../../app/commom';

describe('<LicensePlateInput />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <LicensePlateInput
                occurrenceType='Pneu Furado'
                image={Images.ICON_FLAT_TIRE}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import OccurrenceItem from '../../app/components/OccurrenceItem';
import { Images } from '../../app/commom';

describe('<OccurrenceItem />', () => {
    it('renders correctly', () => {
        const occurrence = {
            vehicle: 'ABC-1234',
            occurrence_type: 'Farol Aceso',
            time: '12:00',
        };

        const tree = renderer.create(
            <OccurrenceItem
                occurrence={{ occurrence }}
                image={Images.ICON_LIGHTS}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

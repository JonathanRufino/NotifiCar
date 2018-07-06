import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import OccurrenceTypeRankingItem from '../../app/components/OccurrenceTypeRankingItem';
import { Images } from '../../app/commom';

describe('<OccurrenceTypeRankingItem />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <OccurrenceTypeRankingItem
                occurrenceType='Pneu Furado'
                image={Images.ICON_FLAT_TIRE}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

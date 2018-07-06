import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import EmptyState from '../../app/components/EmptyState';
import { Images } from '../../app/commom';

describe('<EmptyState />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <EmptyState
                image={Images.ICON_CAR}
                title='No vehicles registered'
                message='To add a new vehicle tap the + button'
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

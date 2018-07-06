import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../app/components/Button';

describe('<Button />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Button
                title='Test Button'
                onPress={() => console.log('Button pressed')}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

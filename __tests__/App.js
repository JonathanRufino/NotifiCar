import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import * as types from '../app/redux/actions/types';
import * as actions from '../app/redux/actions/AccountActions';

describe('actions', () => {
  it('should update vehicle textinput value', () => {
    const vehicle = 'ABC-1234';
    const expectedAction = {
      type: types.WRITE_VEHICLE,
      payload: vehicle
    };
    expect(actions.writeVehicle(vehicle)).toEqual(expectedAction);
  });
});

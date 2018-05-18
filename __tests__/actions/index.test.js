import * as actions from '../index';

describe('Actions', () => {
  it('should clear the city from the store', () => {
    const expectedAction = {
      type: actions.CLEAR,
    };
    expect(actions.clear()).toEqual(expectedAction);
  });
});

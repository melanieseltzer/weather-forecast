import * as actions from '../index';

describe('Actions', () => {
  it('should clear the city from the store', () => {
    const expectedAction = {
      type: actions.CLEAR,
    };
    expect(actions.clear()).toEqual(expectedAction);
  });
  it('should set the status as not loading', () => {
    const bool = false;
    const expectedAction = {
      type: actions.IS_LOADING,
      isLoading: bool,
    };
    expect(actions.isLoading(bool)).toEqual(expectedAction);
  });
  it('should set the status as having an error', () => {
    const bool = true;
    const expectedAction = {
      type: actions.HAS_ERRORED,
      hasErrored: bool,
    };
    expect(actions.hasErrored(bool)).toEqual(expectedAction);
  });
  it('should update the search term to Denver', () => {
    const city = 'Denver';
    const expectedAction = {
      type: actions.UPDATE_TERM,
      payload: city,
    };
    expect(actions.updateTerm(city)).toEqual(expectedAction);
  });
});

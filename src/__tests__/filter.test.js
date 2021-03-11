import filterReducer from '../reducers/filter';

describe('Filter Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = filterReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      current: 'Dessert',
      list: [],
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        current: 'Beef',
        list: [],
      };
      const mockAction = { type: 'any' };
      const state = filterReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        current: 'Beef',
        list: [],
      });
    },
  );
});

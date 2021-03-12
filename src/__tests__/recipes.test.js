import recipeReducer from '../reducers/recipes';

describe('Recipe Reducer', () => {
  it('1. Checks the default state is returned', () => {
    const mockState = undefined;
    const mockAction = { type: 'any' };
    const state = recipeReducer(mockState, mockAction);
    expect(state).toStrictEqual({
      recipes: [],
      active: null,
    });
  });

  it(
    '2. Checks the default action for the reducer, should return given state',
    () => {
      const mockState = {
        recipes: [],
        active: 'Some Active Recipe',
      };
      const mockAction = { type: 'any' };
      const state = recipeReducer(mockState, mockAction);
      expect(state).toStrictEqual({
        recipes: [],
        active: 'Some Active Recipe',
      });
    },
  );
});

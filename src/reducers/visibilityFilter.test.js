import visibilityFilter from './visibilityFilter';

describe('Filter reducer', () => {
  it('should return the initial state', () => {
    expect(visibilityFilter(undefined, {})).toEqual({
      filter: 'SHOW_ALL',
    });
  });

  it('should handle SET_VISIBILITY_FILTER', () => {
    expect(
      visibilityFilter(
        {},
        {
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_IN_STOCK',
        },
      ),
    ).toEqual({
      filter: 'SHOW_IN_STOCK',
    });

    expect(
      visibilityFilter(
        {
          filter: 'SHOW_IN_STOCK',
        },
        {
          type: 'SET_VISIBILITY_FILTER',
          filter: 'SHOW_SOLD_OUT',
        },
      ),
    ).toEqual({
      filter: 'SHOW_SOLD_OUT',
    });
  });
});

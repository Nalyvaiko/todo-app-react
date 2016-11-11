import expect from 'expect';
import deepf from 'deep-freeze-strict';

import reducers from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Dog'
            };
            const res = reducers.searchTextReducer(deepf(''), deepf(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle show completed', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            const res = reducers.showCompletedReducer(deepf(false), deepf(action));

            expect(res).toBe(true);
        });
    });
});

import { questions } from './questions'

describe('Questions reducer', () => {
    it('should not modify state for unrecognised action', function() {
        console.log("testing questions");

        const state = ['foo', 'bar'];
        const stateClone = ['foo', 'bar'];
        const newState = questions(state, {type:"UNRECOGNISED_ACTION"})

        expect(newState).toEqual(state);
        expect(newState).not.toBe(stateClone);
    });

    it('should update state', function() {
        const state = [{ question_id: 'foo' }, {question_id: 'bar'}];
        const newQuestion = { question_id: 'baz' };

        const newState = questions(state, {type: "FETCHED_QUESTION", question: newQuestion});
        expect(newState).toContain(newQuestion);
        expect(state).not.toContain(newQuestion);
        expect(newState).toHaveLength(3);
    });
});

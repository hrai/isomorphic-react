import React from 'react';
import renderer from 'react-test-renderer';
import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';

describe(`the question detail component`, () => {
    it("should map the state to props correctly", () => {
        const sampleQuestion = {
            question_id:42,
            body:'First question',
        };

        const appState = {
            questions:[sampleQuestion],
        };
        const ownProps = {
            question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);

        expect(componentState).toEqual(sampleQuestion);
    });

    describe('The display element', () => {
        it('Should not regress', () => {
            const tree = renderer.create(
                <QuestionDetailDisplay
                    title='The testament'
                    body='23'
                    answer_count={0}
                    tags={ [ 'hiking' ] }
                />

            );

            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});

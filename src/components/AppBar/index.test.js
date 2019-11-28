import React from 'react';
import renderer from 'react-test-renderer';
import AppBar from './';

describe("AppBar", () => {
    it("should render ", () => {

        const mockProps = {
            onClickBackIcon: "tem",
            title: "tem tb",
            ArrowBackVisible: "olha só, temos",
        }

        const tree = renderer.create(<AppBar
            onClickBackIcon={mockProps.onClickBackIcon}
            title={mockProps.title}
            ArrowBackVisible={mockProps.ArrowBackVisible}
            />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
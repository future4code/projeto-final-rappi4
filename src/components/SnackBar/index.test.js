import React from 'react';
import renderer from 'react-test-renderer';
import { MySnackbarContentWrapper } from './';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

describe("MySnackbarContentWrapper", () => {
    it("should render ", () => {
        const mockProps = {
            onClose="close",
            variant="sucess",
            message="deu certo",
            classes="classe",
            className="className"
        }
        const tree = renderer.create(<MySnackbarContentWrapper
            onClose={mockProps.onClose}
            variant={mockProps.variant}
            message={mockProps.message}
            classes={mockProps.classes}
            className={mockProps.className}

        />).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
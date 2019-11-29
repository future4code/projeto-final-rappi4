import { snackBarOpen, snackBarClose } from './snackBar'

describe("SnackBar Action-Creators", () => {

    test("Open SnackBar", () => {
        const expectedResult = {
            type: "SET_SNACKBAR_OPEN",
            payload: {
                msg: "Abriu",
                variant: "Foi"
            }
        };
        const result = snackBarOpen("Abriu", "Foi");
        expect(expectedResult).toMatchObject(result);
    });

    test("Close SnackBar", () => {
        const expectedResult = {
            type: "SET_SNACKBAR_CLOSE",
            payload: {
                open: false
            }
        };
        const result = snackBarClose(false);
        expect(expectedResult).toMatchObject(result);

    });

})
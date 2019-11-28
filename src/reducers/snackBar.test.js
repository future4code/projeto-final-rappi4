import snackBar from './snackBar'

describe("SnackBar reducer", () => {
    
    test("SnackBar open", () => {
        const testAction = {
            type: "SET_SNACKBAR_OPEN",
		    payload: {
                open: true,
                msg:"abriu",
                variant:"deu certo"
		}
        }
        const newState = snackBar(undefined, testAction);
        expect(newState.open).toBe(true);
        expect(newState.msg).toBe("abriu");
        expect(newState.variant).toBe("deu certo");
    })

    test("SnackBar close", () => {
        const testAction = {
            type: "SET_SNACKBAR_CLOSE",
		    payload: {
                open: false,
		}
        }
        const newState = snackBar(undefined, testAction);
        expect(newState.open).toBe(false);
    })

    test("SnackBar return default", () => {
        const mockInitialState = {
            open: false,
            variant: '',
            msg: ''
        }
        
        const testAction = {
            type: "SET_WRONG",
        }
        const newState = snackBar(undefined, testAction);
        expect(newState).toEqual(mockInitialState)
    })

})
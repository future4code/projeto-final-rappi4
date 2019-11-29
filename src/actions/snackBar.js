export const snackBarOpen = (msg, variant) => {
	return {
		type: "SET_SNACKBAR_OPEN",
		payload: {
			msg,
			variant
		}
	}
};

export const snackBarClose = () => {
	return {
		type: "SET_SNACKBAR_CLOSE"
	}
}
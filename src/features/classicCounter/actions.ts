import { ThunkDispatch, Action } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../app/store";
import * as actionTypes from "./types/actionTypes";
import * as api from "./api";

export const increment = (): actionTypes.Increment => {
	return {
		type: actionTypes.INCREMENT,
	};
};

export const decrement = (): actionTypes.Decrement => {
	return {
		type: actionTypes.DECREMENT,
	};
};

export const incrementByAmount = (
	amount: number
): actionTypes.IncrementByAmount => {
	return {
		type: actionTypes.INCREMENT_BY_AMOUNT,
		amount,
	};
};

export const incrementAsyncRequest = (): actionTypes.IncrementAsyncRequest => {
	return {
		type: actionTypes.INCREMENT_ASYNC_REQUEST,
	};
};

export const incrementAsyncSuccess = (
	amount: number
): actionTypes.IncrementAsyncSuccess => {
	return {
		type: actionTypes.INCREMENT_ASYNC_SUCCESS,
		amount,
	};
};

export const incrementAsyncFailure = (): actionTypes.IncrementAsyncFailure => {
	return {
		type: actionTypes.INCREMENT_ASYNC_FAILURE,
	};
};

export const incrementAsync = (amount: number) => {
	return async (
		dispatch: ThunkDispatch<RootState, Promise<void>, Action>
	): Promise<void> => {
		dispatch(incrementAsyncRequest());
		try {
			const fetchedAmount = await api.fetchCount(amount);

			dispatch(incrementAsyncSuccess(fetchedAmount.data));
		} catch (error) {
			dispatch(incrementAsyncFailure());
		}
	};
};

export const incrementIfOdd = (amount: number) => {
	return (dispatch: AppDispatch, getState: () => RootState): void => {
		const currentValue = getState().classicCounter.value;
		if (currentValue % 2 === 1) {
			dispatch(incrementByAmount(amount));
		}
	};
};

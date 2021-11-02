export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
export const INCREMENT_ASYNC_REQUEST = "INCREMENT_ASYNC_REQUEST";
export const INCREMENT_ASYNC_SUCCESS = "INCREMENT_ASYNC_SUCCESS";
export const INCREMENT_ASYNC_FAILURE = "INCREMENT_ASYNC_FAILURE";

export interface Increment {
  type: typeof INCREMENT;
}

export interface Decrement {
  type: typeof DECREMENT;
}

export interface IncrementByAmount {
  type: typeof INCREMENT_BY_AMOUNT;
  amount: number;
}

export interface IncrementByAmount {
  type: typeof INCREMENT_BY_AMOUNT;
  amount: number;
}

export interface IncrementAsyncRequest {
  type: typeof INCREMENT_ASYNC_REQUEST;
}

export interface IncrementAsyncSuccess {
  type: typeof INCREMENT_ASYNC_SUCCESS;
  amount: number;
}

export interface IncrementAsyncFailure {
  type: typeof INCREMENT_ASYNC_FAILURE;
}

export type OldCounterActionTypes =
  | Increment
  | Decrement
  | IncrementByAmount
  | IncrementAsyncRequest
  | IncrementAsyncSuccess
  | IncrementAsyncFailure;

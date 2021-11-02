import { RootState } from "../../app/store";

export const getCount = (state: RootState): number => {
  return state.oldCounter.value;
};

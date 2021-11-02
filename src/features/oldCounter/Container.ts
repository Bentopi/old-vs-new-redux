import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { OldCounter } from "./components/OldCounter";
import * as actions from "./actions";
import * as selectors from "./selectors";

const mapStateToProps = (state: RootState) => ({
  count: selectors.getCount(state),
});

export default connect(mapStateToProps, {
  decrement: actions.decrement,
  increment: actions.increment,
  incrementByAmount: actions.incrementByAmount,
  incrementAsync: actions.incrementAsync,
  incrementIfOdd: actions.incrementIfOdd,
})(OldCounter);

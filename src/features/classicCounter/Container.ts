import { connect } from "react-redux";
import { ClassicCounter } from "./components/ClassicCounter";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { RootState } from "../../app/store";

const mapStateToProps = (state: RootState) => ({
	count: selectors.getCount(state),
});

export default connect(mapStateToProps, {
	increment: actions.increment,
	decrement: actions.decrement,
	incrementByAmount: actions.incrementByAmount,
	incrementAsync: actions.incrementAsync,
	incrementIfOdd: actions.incrementIfOdd,
})(ClassicCounter);

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   increment: () => dispatch(actions.increment()),
//   decrement: () => dispatch(actions.decrement()),
// });

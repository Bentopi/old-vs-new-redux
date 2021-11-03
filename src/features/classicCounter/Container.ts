import { connect } from "react-redux";
import { ClassicCounter } from "./components/ClassicCounter";
import * as actions from "./actions";
import * as selectors from "./selectors";
import { RootState } from "../../app/store";

const mapStateToProps = (state: RootState) => ({
	count: selectors.getCount(state),
});

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   decrement: () => dispatch(actions.decrement()),
//   increment: () => dispatch(actions.increment()),
// });

export default connect(mapStateToProps, {
	decrement: actions.decrement,
	increment: actions.increment,
	incrementByAmount: actions.incrementByAmount,
	incrementAsync: actions.incrementAsync,
	incrementIfOdd: actions.incrementIfOdd,
})(ClassicCounter);

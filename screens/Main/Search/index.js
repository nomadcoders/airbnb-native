import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { token: state.usersReducer.token };
}

export default connect(mapStateToProps)(SearchContainer);

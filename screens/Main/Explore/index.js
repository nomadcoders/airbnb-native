import ExploreContainer from "./ExploreContainer";
import { connect } from "react-redux";
import { getRooms } from "../../../redux/roomsSlice";

function mapDispatchToProps(dispatch) {
  return {
    getRooms: () => dispatch(getRooms())
  };
}

function mapStateToProps(state) {
  return state.roomsReducer.explore;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);

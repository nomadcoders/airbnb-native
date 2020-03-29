import SavedContainer from "./SavedContainer";
import { getFavs } from "../../../redux/usersSlice";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { rooms: state.roomsReducer.favs };
}

function mapDispatchToProps(dispatch) {
  return {
    getFavs: () => dispatch(getFavs())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);

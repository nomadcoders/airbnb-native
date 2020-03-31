import MapContainer from "./MapContainer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { rooms: state.roomsReducer.explore.rooms };
}

export default connect(mapStateToProps)(MapContainer);

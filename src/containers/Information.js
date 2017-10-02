import { connect } from "react-redux";
import { Information as informationComponent } from "../components/Information";

const mapStateToProps = state => {
  console.log("information container", state);
  return { currentCounter: state.counter.currentCounter };
};

const Information = connect(mapStateToProps)(informationComponent);

export default Information;

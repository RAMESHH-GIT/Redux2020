import React from 'react';
import {
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { listDataActions } from './actions/listDataActions';

class About extends  React.Component {
  render() {
    const {listData: {selection: {name = '', role = ''} = {}} = {} } = this.props;
    return(
      <div>
        Name: {name} <br/>
        role: {role}
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {listData: state.listData}
};

export default connect(mapStateToProps, { setSelection: listDataActions.setSelection })(withRouter(About));

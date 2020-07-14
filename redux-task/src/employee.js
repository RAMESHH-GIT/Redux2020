import React from 'react';
import {
  Link,withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import { listDataActions } from './actions/listDataActions';

class Employee extends React.Component {
  handleClick = (data) => {
    this.props.setSelection(data);
  };
  render() {
      console.log(this.props);
     
      
    const {listData: {list = []} = {}} = this.props;
    return(<div>
      {list.map(emp => {
        return <div key={emp.name} onClick={()=>this.handleClick(emp)}>
             <h1>{}</h1>
          <Link
            to={{
              pathname: '/about'
            }}
          >{emp.name}</Link>
        </div>
      })}
    </div>)
  }
}
const mapStateToProps = (state) =>{
  return {listData: state.listData}
};
export default connect(mapStateToProps, { setSelection: listDataActions.setSelection })(withRouter(Employee));

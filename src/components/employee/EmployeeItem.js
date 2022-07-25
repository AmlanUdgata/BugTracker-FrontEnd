import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteEmployee } from "../../actions/EmployeeActions";
import PropTypes from "prop-types";
class EmployeeItem extends React.Component{
    onDeleteClick=id=>{
     this.props.deleteEmployee(id);
    }
    render(){
         const{employee}=this.props;
         return(
         <div className="container">
         <div className="card card-body bg-light mb-3">
             <div className="row">
                 <div className="col-2">
                     <span className="mx-auto">{employee.employeeId}</span>
                 </div>
                 <div className="col-lg-6 col-md-4 col-8">
                     <h3>{employee.employeeName}</h3>
                     <p>{employee.email}</p>
                 </div>
                 <div className="col-md-4 d-none d-lg-block">
                     <ul className="list-group">
                         <a href="#">
                             <li className="list-group-item board">
                                 <i className="fa fa-flag-checkered pr-1">Employee Board </i>
                             </li>
                         </a>
                         <Link to={`/updateEmployee/${employee.employeeId}`}>
                             <li className="list-group-item update">
                                 <i className="fa fa-edit pr-1">Update Employee Info</i>
                             </li>
                         </Link>
                         <a href="">
                             <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,employee.employeeId)}>
                                 <i className="fa fa-minus-circle pr-1">Delete Employee</i>
                             </li>
                         </a>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
         );   
    }
}
EmployeeItem.propTypes={
    deleteEmployee: PropTypes.func.isRequired,
};
export default connect(null,{deleteEmployee})(EmployeeItem);
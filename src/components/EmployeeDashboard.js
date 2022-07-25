import React from "react";
import EmployeeItem from "./employee/EmployeeItem";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getEmployees } from "../actions/EmployeeActions";
import PropTypes from "prop-types";
class EmployeeDashboard extends React.Component{
     componentDidMount(){
         this.props.getEmployees();
     }
    render(){
        const {employees}=this.props.employee;
        console.log(employees);
        return(
            <div className="employees">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Employees</h1>
                        <br />
                        <Link to="/addEmployee" className="btn btn-lg btn-info">
                            Add an Employee
                        </Link>
                        <br />
                        <hr />
                        {
                            employees.map(employee=>(
                            <EmployeeItem key={employee.id} employee={employee}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}

EmployeeDashboard.protoTypes={
    getEmployees:PropTypes.func.isRequired,
    employee:PropTypes.object.isRequired
  }
  const mapStateToProps = (state) =>({
  employee: state.employee,
  });
  export default  connect(mapStateToProps,{getEmployees})(EmployeeDashboard);
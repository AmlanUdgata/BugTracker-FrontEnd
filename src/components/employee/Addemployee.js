import React,{ Component } from "react";
import { connect } from "react-redux";
import { createEmployee } from "../../actions/EmployeeActions";
import PropTypes from "prop-types";

class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            employeeName:"",
            email:"",
            password:"",
            employeeContact:"",
            bug:""
        };
    }
    onChange=(event)=>{
      //console.log(event.target.value);
    //   event.target.name it will connect all thing bug name,projece identifier,description
      this.setState({[event.target.name]: event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //console.log("------onsubmit triggerd---");
        const newEmployee={
            employeeName:this.state.employeeName,
            email:this.state.email,
            password:this.state.password,
            employeeContact:this.state.employeeContact,
            bug:this.state.bug
        };
        //console.log(newbug);
        //call the create bug from action
        this.props.createEmployee(newEmployee,this.props.history);
    };
    render(){
        return(
            <div className="employee">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Employee Details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Employee Name" 
                                name="employeeName" 
                                value={this.state.employeeName} 
                                onChange={this.onChange}/>
                            </div>
                             {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                 placeholder="email" 
                                 name="email" 
                                 value={this.state.description} 
                                 onChange={this.onChange}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="employee contact" 
                                name="employeeContact" 
                                value={this.state.employeeContact} 
                                onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="bug" 
                                name="bug" 
                                value={this.state.bug} 
                                onChange={this.onChange}
                                />
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddEmployee.propTypes={
    createEmployee: PropTypes.func.isRequired,
}
export default connect(null,{createEmployee})(AddEmployee);
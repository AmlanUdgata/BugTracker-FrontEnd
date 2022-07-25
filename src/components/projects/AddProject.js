import React,{ Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../actions/ProjectActions";
import PropTypes from "prop-types";

class AddProject extends Component{
    constructor(props){
        super(props);
        this.state={
            projectName:"",
            projectIdentifier:"",
            description:""
        };
    }
    onChange=(event)=>{
      //console.log(event.target.value);
    //   event.target.name it will connect all thing project name,projece identifier,description
      this.setState({[event.target.name]: event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //console.log("------onsubmit triggerd---");
        const newProject={
            projectName:this.state.projectName,
            projectIdentifier:this.state.projectIdentifier,
            description:this.state.description
        };
        //console.log(newProject);
        //call the create project from action
        this.props.createProject(newProject,this.props.history);
    };
    render(){
        return(
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Project Details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Project Name" 
                                name="projectName" 
                                value={this.state.projectName} 
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Unique Project ID" 
                                name="projectIdentifier" 
                                value={this.state.projectIdentifier} 
                                onChange={this.onChange}
                                     />
                            </div>
                             {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                 placeholder="Project Description" 
                                 name="description" 
                                 value={this.state.description} 
                                 onChange={this.onChange}></textarea>
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

AddProject.propTypes={
    createProject: PropTypes.func.isRequired,
}
export default connect(null,{createProject})(AddProject);
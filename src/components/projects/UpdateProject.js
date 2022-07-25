import React,{Component} from "react";
import { connect } from "react-redux";
import { getProject , createProject} from "../../actions/ProjectActions";
import PropTypes from "prop-types";
// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

class UpdateProject extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            projectName:"",
            projectIdentifier:"",
            description:""
        };
    }

    componentDidMount(){
        const {id}=this.props.match.params;
        this.props.getProject(id,this.props.history);
    } 
    componentWillReceiveProps(nextProps){
        const{
            id,
            projectName,
            projectIdentifier,
            description
        } =nextProps.project;
        this.setState({
            id,
            projectName,
            projectIdentifier,
            description
        })
    }
    onChange=(event)=>{
        //console.log(event.target.value);
      //   event.target.name it will connect all thing project name,projece identifier,description
        this.setState({[event.target.name]: event.target.value});
      };

     
    onSubmit=(event)=>{
        event.preventDefault();
        //console.log("------onsubmit triggerd---");
        const newProject={
            id:this.state.id,
            projectName:this.state.projectName,
            projectIdentifier:this.state.projectIdentifier,
            description:this.state.description
        };
        //console.log(newProject);
        //call the create project from action
        this.props.createProject(newProject,this.props.history);
    }; 

    render(){
        return  <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Project form</h5>
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
                            disabled
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
    </div>;
    }
}
UpdateProject.propTypes={
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
};
const mapStateToProps=state=>({
    project:state.projects.project
})
export default connect(mapStateToProps,{getProject, createProject})(UpdateProject);
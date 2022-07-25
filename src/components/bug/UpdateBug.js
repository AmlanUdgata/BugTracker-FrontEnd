import React,{Component} from "react";
import { connect } from "react-redux";
import { getBug , createBug} from "../../actions/BugActions";
import PropTypes from "prop-types";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

class UpdateBug extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            bugName:"",
            bugDescription:"",
            projectId:"",
            bugStatus:""
        };
    }

    componentDidMount(){
        const {id}=this.props.match.params;
        this.props.getBug(id,this.props.history);
    } 
    componentWillReceiveProps(nextProps){
        const{
            id,
            bugName,
            bugDescription,
            projectId,
            bugStatus            
        } =nextProps.bug;
        this.setState({
            id,
            bugName,
            bugDescription,
            projectId,
            bugStatus
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
        const newBug={
            id:this.state.id,
            bugName:this.state.bugName,
            bugDescription:this.state.bugDescription,
            projectId:this.state.projectId,
            bugStatus:this.state.bugStatus
        };
        //console.log(newProject);
        //call the create project from action
        this.props.createBug(newBug,this.props.history);
    }; 

    render(){
        return  <div className="bug">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Bug form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " 
                            placeholder="Bug Name" 
                            name="bugName" 
                            value={this.state.bugName} 
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="Project ID" 
                            name="projectId" 
                            value={this.state.projectId} 
                            disabled
                            />
                        </div>
                         {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                        <div className="form-group">
                            <textarea className="form-control form-control-lg"
                             placeholder="Bug Description" 
                             name="bugDescription" 
                             value={this.state.bugDescription} 
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
UpdateBug.propTypes={
    getBug: PropTypes.func.isRequired,
    createBug: PropTypes.func.isRequired,
};
const mapStateToProps=state=>({
    bug:state.bugs.bug
})
export default connect(mapStateToProps,{getBug, createBug})(UpdateBug);
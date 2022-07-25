import React,{ Component } from "react";
import { connect } from "react-redux";
import { createBug } from "../../actions/BugActions";
import PropTypes from "prop-types";

class AddBug extends Component{
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
    onChange=(event)=>{
      //console.log(event.target.value);
    //   event.target.name it will connect all thing bug name,projece identifier,description
      this.setState({[event.target.name]: event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //console.log("------onsubmit triggerd---");
        const newBug={
            bugName:this.state.bugName,
            bugDescription:this.state.bugDescription,
            projectId:this.state.projectId,
            bugStatus:this.state.bugStatus
        };
        //console.log(newbug);
        //call the create bug from action
        this.props.createBug(newBug,this.props.history);
    };
    render(){
        return(
            <div className="bug">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Bug form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Bug Name" 
                                name="bugName" 
                                value={this.state.bugName} 
                                onChange={this.onChange}/>
                            </div>
                             {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                 placeholder="bug Description" 
                                 name="description" 
                                 value={this.state.description} 
                                 onChange={this.onChange}></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="project ID" 
                                name="projectId" 
                                value={this.state.projectId} 
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

AddBug.propTypes={
    createBug: PropTypes.func.isRequired,
}
export default connect(null,{createBug})(AddBug);
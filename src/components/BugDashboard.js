import React from "react";
import BugItem from "./bug/BugItem";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { getBugs } from "../actions/BugActions";
import PropTypes from "prop-types";
class BugDashboard extends React.Component{
     componentDidMount(){
         this.props.getBugs();
     }
    render(){
        const {bugs}=this.props.bugs;
        console.log(bugs);
        return(
            <div className="bugs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Bugs</h1>
                        <br />
                        <Link to="/addBug" className="btn btn-lg btn-info">
                            Create a Bug
                        </Link>
                        <br />
                        <hr />
                        
                        {
                            bugs.map(bug=>(
                            <BugItem key={bug.id} bug={bug}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}

BugDashboard.protoTypes={
    getBugs:PropTypes.func.isRequired,
    bugs:PropTypes.object.isRequired
  }
  const mapStateToProps = (state) =>({
  bugs: state.bugs,
  });
  export default  connect(mapStateToProps,{getBugs})(BugDashboard);
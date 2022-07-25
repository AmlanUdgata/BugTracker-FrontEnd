import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBug } from "../../actions/BugActions";
import PropTypes from "prop-types";
class BugItem extends React.Component{
    onDeleteClick=id=>{
     this.props.deleteBug(id);
    }
    render(){
         const{ Bug }=this.props;
         return(
         <div className="container">
         <div className="card card-body bg-light mb-3">
             <div className="row">
                 <div className="col-2">
                     <span className="mx-auto">{Bug.bugName}</span>
                 </div>
                 <div className="col-lg-6 col-md-4 col-8">
                     <h3>{Bug.projectId}</h3>
                     <p>{Bug.bugdescription}</p>
                 </div>
                 <div className="col-md-4 d-none d-lg-block">
                     <ul className="list-group">
                         <a href="#">
                             <li className="list-group-item board">
                                 <i className="fa fa-flag-checkered pr-1">Bug Board</i>
                             </li>
                         </a>
                         <Link to={`/updateBug/${Bug.id}`}>
                             <li className="list-group-item update">
                                 <i className="fa fa-edit pr-1">Update Bug Info</i>
                             </li>
                         </Link>
                         <a href="">
                             <li className="list-group-item delete" onClick={this.onDeleteClick.bind(this,Bug.id)}>
                                 <i className="fa fa-minus-circle pr-1">Delete Bug</i>
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
BugItem.propTypes={
    deleteBug: PropTypes.func.isRequired,
};
export default connect(null,{deleteBug})(BugItem);
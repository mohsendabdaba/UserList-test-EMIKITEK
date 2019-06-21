import React, { Component } from "react";
import { addUsers } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Users extends Component {
 
  render() {
    return (
      <div className="contactList">
        {this.props.users.map((item, index) => {
          return (
            <div key={index} className="contactBox">
              <h2>{item.name} </h2>
              <h2>{item.email}</h2>
             
              <Link to={`/user/:name${item.name}`}>
               <button>back</button>
              </Link>
              
            </div>
          );
        })}
      </div>

  
  )
    }
  }
    
const mapStateToProps = state => {
  return {
    users: state
  };
};
export default connect(  mapStateToProps,{ addUsers })(Users);

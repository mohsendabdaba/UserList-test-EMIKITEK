import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class User extends Component {

  holderChange = event => {
    this.setState({
       [event.target.name]: event.target.value 
      });
  };
  
  onSubmit = () => {
    let userslist= this.props.users
     const   obj= {
      name:this.props.name,
      email:this.props.email,
      phone:this.props.phone,
      location:this.props.location
    }
    userslist.push(obj)
      //  props.tab1 = movies
      return (userslist)
  };
  

  render() {
    return (
      <div
        className="contact-input-container "
        style={{ flexDirection: "column" }}
      >
        <h1> USER DETAILS </h1>
        <div className="user-input">

          <input placeholder="name" name="name" onChange={this.holderChange} />

          <input
            placeholder="email"
            name="email"
            onChange={this.holderChange}
          />

          <input
            placeholder="telephone"
            name="phone"
            onChange={this.holderChange}
          />
          <select  onChange={this.holderChange}>
            <option>male</option>
            <option>female</option>
            <option>others</option>
          </select>
          <input
            placeholder="location"
            name="location"
            onChange={this.holderChange}
          />
 
          <button onClick={this.onSubmit}>add</button>
        </div>
      </div>
    );
  }
}

export default withRouter(User);

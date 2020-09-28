import React, { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
        }
    }

   handleEmailChange=(event)=>{
      this.setState({
          email:event.target.value,
      });
   }

   handlePasswordChange=(event)=>{
      this.setState({
          password:event.target.value,
      })
   }
    
    render() {
        return (
            <form className="login-form">
                 <span className="login-signup-header">Log In</span>
                 <div className="field">
                    <input type="email" placeholder="Email" required  onChange={this.handleEmailChange}/>
                 </div>
                 <div className="field">
                  <input type="password" placeholder="Password" required onChange={this.handlePasswordChange}/>
                 </div>
                <div className="field">
                    <button onClick={this.handleFormSubmit}>LogIn</button>
                </div>                 
            </form>
                
            
        )
    }
}

export default Login

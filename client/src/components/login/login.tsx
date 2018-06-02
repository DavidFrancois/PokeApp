import * as React from 'react';
import { Redirect } from 'react-router-dom'

import './login.css';

export class Login extends React.Component {
  public state = {
    redirect: false
  }

  constructor(props: any){
    super(props);
  }

  public setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  public renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/target' />
    } else {
      return null
    }
  }

  public render() {
      return (
        <div className="offset-md-4 col-md-4 wrapper">
          { this.setRedirect }
          <div className="user-form">
            <h1 className="title text-format">Pick a Username</h1>
            <input type="text" id="username" className="input-username text-format" />
              <div className="btn-chat text-format" onClick={this.renderRedirect}>Ready to GO!</div>
          </div>
        </div>
      );
  }
}

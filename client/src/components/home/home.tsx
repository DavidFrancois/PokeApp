import * as React from 'react';
import './home.css';

export class Home extends React.Component {
  constructor(props: any){
    super(props);
  }

  public render() {
      return (
        <div className="offset-md-4 col-md-4 wrapper">
          <div className="user-form">
            <h1 className="title text-format">Pick a Username</h1>
            <input type="text" id="username" className="input-username text-format" />
            <div className="btn-chat text-format">Ready to GO!</div>
          </div>
        </div>
      );
  }
}
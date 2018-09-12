import * as React from 'react';
import './App.css';

interface AppState {
  username: string;
  password: string;
}

export class App extends React.Component<{}, AppState> {
  public state: AppState = {
    username: '',
    password: ''
  };

  public onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  public render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

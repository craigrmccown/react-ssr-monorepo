import React from "react";

class App extends React.Component {
  state = { message: "SSR successful." };

  componentDidMount() {
    this.setState({ message: "App successfully hydrated." });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h1>SSR React App</h1>
        <div>{message}</div>
      </div>
    );
  }
}

export default App;

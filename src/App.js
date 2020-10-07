import React from "react";
import "./App.css";

const firebase = require("firebase");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }
  render() {
    return <div>Hello World</div>;
  }

  componentDidMount = () => {
    firebase.firestore().collection("notes");
  };
}

export default App;

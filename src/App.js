import React, { Component } from "react";
import "./App.css";
import "./ValidationSample.css";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./ScrollBox";
// import Say from "./Say";
import IterationSample from "./IterationSample";

class App extends Component {
    render() {
        return (
            <div>
                {/* <ValidationSample />
        <br />
        <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <Say /> */}
                <IterationSample />
            </div>
        );
    }
}

export default App;

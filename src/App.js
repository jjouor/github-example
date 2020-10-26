import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";

class App extends React.Component {
  render() {
    return (
      <div className="mainPage">
        <Search />
        <Results />
      </div>
    );
  }
}
export default App;
